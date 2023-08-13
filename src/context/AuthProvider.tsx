'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import {
	User,
	signOut,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	fetchSignInMethodsForEmail as checkEmailExist,
} from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'

import { auth, db } from '@/config/firebase'
import { AuthCtx } from './AuthCtx'
import { navigation } from '@/navigation_paths'

export type UserInfoType = Readonly<{
	email: string
	name: string
	created: string
	image: string
}>

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [authUser, setAuthUser] = useState<User | null>(null)
	const [user, setUser] = useState<UserInfoType>()
	const [isAccountExists, setIsAccountExists] = useState(false)
	const [invalidCredentials, setInvalidCredentials] = useState(false)

	const router = useRouter()

	const getUserInfo = async ({ ...userInfo }: Partial<UserInfoType>) => {
		if (authUser && authUser.email) {
			const userRef = doc(db, 'user', authUser.email)
			await setDoc(userRef, { ...userInfo }, { merge: true })
		} else {
			const userRef = doc(db, 'user', userInfo.email!)
			await setDoc(userRef, { ...userInfo }, { merge: true })
		}
	}

	const createUser = async (email: string, password: string) => {
		try {
			const isAccount = await checkEmailExist(auth, email)
			if (isAccount.length > 0) return setIsAccountExists(true)
			setIsAccountExists(false)
			await createUserWithEmailAndPassword(auth, email, password)
			router.replace(navigation.home.path)
		} catch (error) {
			console.error('Failed create user:', error)
		}
	}

	const logInUser = async (email: string, password: string) => {
		try {
			setInvalidCredentials(false)
			await signInWithEmailAndPassword(auth, email, password)
			router.replace(navigation.home.path)
		} catch (error) {
			setInvalidCredentials(true)
			console.error('Log in failed:', error)
		}
	}

	const logout = async () => {
		try {
			await signOut(auth)
			router.replace(navigation.login.path)
		} catch (error) {
			console.error('Log out failed:', error)
		}
	}

	useEffect(() => {
		if (authUser?.email) {
			const docRef = doc(db, 'user', authUser.email)
			const unsubscribe = onSnapshot(docRef, doc => {
				const userData = doc.data() as UserInfoType
				setUser(userData)
			})
			return () => unsubscribe()
		}
	}, [authUser])

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, setAuthUser)
		return () => unsubscribe()
	}, [authUser])

	const value = {
		createUser,
		logInUser,
		logout,
		getUserInfo,
		isAccountExists,
		invalidCredentials,
		isAuthenticated: authUser,
		user,
	}
	return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>
}
