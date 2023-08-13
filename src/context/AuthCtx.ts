import type { User } from 'firebase/auth'
import { createContext } from 'react'

import { UserInfoType } from './AuthProvider'

type AuthContextValues = {
	createUser: (_email: string, _password: string) => Promise<void>
	logInUser: (_email: string, _password: string) => Promise<void>
	logout: () => Promise<void>
	updateUserInfo: (_user: Partial<UserInfoType>) => Promise<void>
	updateCredentials: (_newEmail: string, _newPassword: string) => Promise<void>
	isEmailExist: boolean
	invalidCredentials: boolean
	isAuthenticated: User | null
	user: UserInfoType | undefined
}

const defaultValue: AuthContextValues = {
	createUser: async (_email: string, _password: string) => {},
	logInUser: async (_email: string, _password: string) => {},
	logout: async () => {},
	updateUserInfo: async (_user: Partial<UserInfoType>) => {},
	updateCredentials: async (_newEmail: string, _newPassword: string) => {},
	isEmailExist: false,
	invalidCredentials: false,
	isAuthenticated: null,
	user: { created: '', email: '', image: '', name: '' },
}

export const AuthCtx = createContext<AuthContextValues>(defaultValue)
