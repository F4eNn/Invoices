import type { User } from 'firebase/auth'
import { createContext } from 'react'

type AuthContextValues = {
	createUser: (_email: string, _password: string) => Promise<void>
	logInUser: (_email: string, _password: string) => Promise<void>
	isAccountExists: boolean
	invalidCredentials: boolean
    isAuthenticated: User | null
}

const defaultValue: AuthContextValues = {
	createUser: async (_email: string, _password: string) => {},
	logInUser: async (_email: string, _password: string) => {},
	isAccountExists: false,
	invalidCredentials: false,
    isAuthenticated: null
}

export const AuthCtx = createContext<AuthContextValues>(defaultValue)
