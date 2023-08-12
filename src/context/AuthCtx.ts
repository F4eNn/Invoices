import type { User } from 'firebase/auth'
import { createContext } from 'react'

import { UserInfoType } from './AuthProvider'

type AuthContextValues = {
	createUser: (_email: string, _password: string) => Promise<void>
	logInUser: (_email: string, _password: string) => Promise<void>
	logout: () => Promise<void>
	getUserInfo: (_user: Partial<UserInfoType>) => Promise<void>
	isAccountExists: boolean
	invalidCredentials: boolean
	isAuthenticated: User | null
}

const defaultValue: AuthContextValues = {
	createUser: async (_email: string, _password: string) => {},
	logInUser: async (_email: string, _password: string) => {},
	logout: async () => {},
	getUserInfo: async (_user :Partial<UserInfoType>) => {},
	isAccountExists: false,
	invalidCredentials: false,
	isAuthenticated: null,
}

export const AuthCtx = createContext<AuthContextValues>(defaultValue)
