'use client'
import React from 'react'

import { InvoiceControl } from '@/components/content/InvoiceControl'
import { Pannel } from '@/components/pannel/Pannel'
import { ContentWrapper } from '@/components/ui/ContentWrapper'
import { InvoiceBody } from '@/components/content/InvoiceBody'
import { FormProvider, MenageFormProvider } from '@/context/FormProviders'
import { Create } from '@/components/content/Create'
import { motion } from '@/lib/motion'
import { pageTransition } from '@/animations/animations'

export default function Home() {
	return (
		<motion.main key='main' {...pageTransition} className='flex min-h-screen flex-col lg:flex-row '>
			<Pannel />
			<ContentWrapper>
				<div className='flex  flex-1 h-full flex-col '>
					<FormProvider>
						<MenageFormProvider>
							<InvoiceControl />
							<Create />
						</MenageFormProvider>
					</FormProvider>
					<InvoiceBody />
				</div>
			</ContentWrapper>
		</motion.main>
	)
}
