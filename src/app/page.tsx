'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

import { Nav } from '@/components/content/nav/Nav'
import { Pannel } from '@/components/pannel/Pannel'
import { ContentWrapper } from '@/components/ui/ContentWrapper'
import { useAuth } from '@/hooks/useAuth'
import { navigation } from '@/navigation_paths'

export default function Home() {
	const { isAuthenticated } = useAuth()

	useEffect(() => {
		if (!isAuthenticated) redirect(navigation.login.path)
	}, [isAuthenticated])
	return (
		<main className='h-full flex flex-col lg:flex-row'>
			<Pannel />
			<ContentWrapper>
				<Nav />
			</ContentWrapper>
		</main>
	)
}
