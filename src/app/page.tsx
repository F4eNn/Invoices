'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

import { Control } from '@/components/content/Control'
import { Pannel } from '@/components/pannel/Pannel'
import { ContentWrapper } from '@/components/ui/ContentWrapper'
import { useAuth } from '@/hooks/useAuth'
import { navigation } from './layout'

export default function Home() {
	const { isAuthenticated } = useAuth()

	useEffect(() => {
		if (!isAuthenticated) redirect(navigation.login.path)
	}, [isAuthenticated])
	return (
		<main className='h-full flex flex-col lg:flex-row'>
			<Pannel />
			<ContentWrapper>
				<Control />
			</ContentWrapper>
		</main>
	)
}
