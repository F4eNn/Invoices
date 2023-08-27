'use client'
import React from 'react'

import { Pannel } from '@/components/pannel/Pannel'
import { InvoiceDetails } from '@/components/content/details/InvoiceDetails'
import { FormProvider, MenageFormProvider } from '@/context/FormProviders'
import { Portal } from '@/constants/Portal'
import { Create } from '@/components/content/Create'
import { AuthGuard } from '@/constants/AuthGuard'

const InvoicePage = () => {
	return (
		<div className='flex h-full flex-col lg:flex-row  '>
			<AuthGuard>
				<Pannel />
				<FormProvider>
					<MenageFormProvider>
						<InvoiceDetails />
						<Portal selector='#form'>
							<Create />
						</Portal>
					</MenageFormProvider>
				</FormProvider>
			</AuthGuard>
		</div>
	)
}

export default InvoicePage
