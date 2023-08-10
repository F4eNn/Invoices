'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import {
	User,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	fetchSignInMethodsForEmail as checkEmailExist,
} from 'firebase/auth'
import { useRouter } from 'next/navigation'

import { auth } from '@/config/firebase'
import { AuthCtx } from './AuthCtx'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null)
	const [isAccountExists, setIsAccountExists] = useState(false)
	const [invalidCredentials, setInvalidCredentials] = useState(false)

	const router = useRouter()

	const createUser = async (email: string, password: string) => {
		try {
			const isAccount = await checkEmailExist(auth, email)
			if (isAccount.length > 0) return setIsAccountExists(true)
			setIsAccountExists(false)
			await createUserWithEmailAndPassword(auth, email, password)
			router.replace('/')
		} catch (error) {
			console.error('Failed create user:', error)
		}
	}

	const logInUser = async (email: string, password: string) => {
		try {
			setInvalidCredentials(false)
			await signInWithEmailAndPassword(auth, email, password)
			router.replace('/')
		} catch (error) {
			setInvalidCredentials(true)
			console.error('Log in failed:', error)
		}
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, setUser)
		return () => unsubscribe()
	}, [user])

	const value = {
		createUser,
		logInUser,
		isAccountExists,
		invalidCredentials,
        isAuthenticated: user
	}
	return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>
}
