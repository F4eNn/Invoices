'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

import { InvoiceControl } from '@/components/content/InvoiceControl'
import { Pannel } from '@/components/pannel/Pannel'
import { ContentWrapper } from '@/components/ui/ContentWrapper'
import { useAuth } from '@/hooks/useAuth'
import { navigation } from '@/constants/navigation_paths'
import { InvoiceBody } from '@/components/content/InvoiceBody'
import { InvoiceProvider } from '@/context/InvoiceProvider'

export default function Home() {
	const { isAuthenticated } = useAuth()

	useEffect(() => {
		if (!isAuthenticated) redirect(navigation.login.path)
	}, [isAuthenticated])

	return (
		<main className='flex h-full flex-col lg:flex-row'>
			<Pannel />
			<ContentWrapper>
				<div className='flex  h-full flex-col '>
					<InvoiceControl />
					<InvoiceProvider>
						<InvoiceBody />
					</InvoiceProvider>
				</div>
			</ContentWrapper>
		</main>
	)
}
