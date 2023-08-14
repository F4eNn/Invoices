'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

import { InvoiceControl } from '@/components/content/InvoiceControl'
import { Pannel } from '@/components/pannel/Pannel'
import { ContentWrapper } from '@/components/ui/ContentWrapper'
import { useAuth } from '@/hooks/useAuth'
import { navigation } from '@/constants/navigation_paths'

export default function Home() {
	const { isAuthenticated } = useAuth()

	useEffect(() => {
		if (!isAuthenticated) redirect(navigation.login.path)
	}, [isAuthenticated])
	return (
		<main className='h-full flex flex-col lg:flex-row'>
			<Pannel />
			<ContentWrapper>
				<InvoiceControl />
			</ContentWrapper>
		</main>
	)
}
