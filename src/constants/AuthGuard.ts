'use client'
import { ReactNode, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { useAuth } from '@/hooks/useAuth'
import { navigation } from './navigation_paths'

export const AuthGuard = ({ children }: { children: ReactNode }) => {
	const { replace } = useRouter()
	const { isAuthenticated } = useAuth()
	const params = useSearchParams()
	const isProtectedRoutes = params.toString() !== ('mode=login' || 'mode=signup')
    
	useEffect(() => {
		if (!isAuthenticated && isProtectedRoutes) replace(navigation.login.path)
		if (isAuthenticated && !isProtectedRoutes) replace(navigation.home.path)
	}, [isAuthenticated, params])

	return children
}
