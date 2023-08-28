'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import {
	User,
	signOut,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	fetchSignInMethodsForEmail as checkEmailExist,
	updateEmail,
	updatePassword,
} from 'firebase/auth'
import { usePathname, useRouter } from 'next/navigation'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'

import { auth, db } from '@/config/firebase'
import { AuthCtx } from './AuthCtx'
import { navigation } from '@/constants/navigation_paths'
import { notify } from '@/constants/notify'

export type UserInfoType = Readonly<{
	email: string
	name: string
	created: string
	image: string
}>

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [authUser, setAuthUser] = useState<User | null>(null)
	const [user, setUser] = useState<UserInfoType>()
	const [isEmailExist, setIsEmail] = useState(false)
	const [invalidCredentials, setInvalidCredentials] = useState(false)

	const router = useRouter()

	const updateUserInfo = async ({ ...userInfo }: Partial<UserInfoType>) => {
		try {
			if (authUser && authUser.email) {
				const userRef = doc(db, 'user', authUser.email)
				await setDoc(userRef, { ...userInfo }, { merge: true })
			} else {
				const userRef = doc(db, 'user', userInfo.email!)
				await setDoc(userRef, { ...userInfo }, { merge: true })
			}
		} catch (error) {
			console.error('Failed during set user:', error)
		}
	}

	const checkIfEmailExist = async (email: string) => {
		try {
			setIsEmail(false)
			const isAccount = await checkEmailExist(auth, email)
			if (isAccount.length > 0) return setIsEmail(true)
		} catch (error) {
			console.error('Failed during check email:', error)
		}
	}

	const createUser = async (email: string, password: string) => {
		try {
			await checkIfEmailExist(email)
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
			notify('Welcome back!')
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
			console.error(`Failed during log out:`, error)
		}
	}

	const updateCredentials = async (newEmail: string, newPassword: string) => {
		if (!authUser) return
		try {
			if (newEmail !== authUser.email) {
				await checkIfEmailExist(newEmail)
			}
			await updateEmail(authUser, newEmail)
			await updatePassword(authUser, newPassword)
			await logout()
			setIsEmail(false)
			notify('Success! Login details modified')
		} catch (error) {
			alert('For your safety, we kindly request you to log in again.')
			console.error('Error during update credentials:', error)
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

	const pathname = usePathname()
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (!user) {
				setAuthUser(null)
				if (pathname !== '/register') {
					router.replace('/register?mode=login')
				}
			} else if (user) {
				setAuthUser(user)
				if (pathname === '/register') {
					router.replace('/')
				}
			}
		})
		return () => unsubscribe()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const value = {
		createUser,
		logInUser,
		logout,
		updateUserInfo,
		updateCredentials,
		isEmailExist,
		invalidCredentials,
		isAuthenticated: authUser,
		user,
	}
	return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>
}
