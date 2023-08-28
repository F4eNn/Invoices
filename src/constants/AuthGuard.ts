'use client'
import { ReactNode, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { useAuth } from '@/hooks/useAuth'
import { navigation } from './navigation_paths'

export const AuthGuard = ({ children }: { children: ReactNode }) => {
	const { replace } = useRouter()
	const { isAuthenticated } = useAuth()
	const pathname = usePathname()
	const isProtectedRoutes = pathname !== '/register'
	const isRegister = pathname === '/register'
	useEffect(() => {
		if (!isAuthenticated && isProtectedRoutes) replace(navigation.login.path)
		if (isAuthenticated && isRegister) replace(navigation.home.path)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated, pathname])

	return children
}
