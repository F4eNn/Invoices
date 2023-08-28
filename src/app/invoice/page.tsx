'use client'
import React from 'react'

import { Pannel } from '@/components/pannel/Pannel'
import { InvoiceDetails } from '@/components/content/details/InvoiceDetails'
import { FormProvider, MenageFormProvider } from '@/context/FormProviders'
import { Create } from '@/components/content/Create'
import { motion } from '@/lib/motion'
import { pageTransition } from '@/animations/animations'

const InvoicePage = () => {
	return (
		<motion.div {...pageTransition} className='flex min-h-screen flex-col lg:flex-row  '>
				<Pannel />
				<FormProvider>
					<MenageFormProvider>
						<InvoiceDetails />
						<Create />
					</MenageFormProvider>
				</FormProvider>
		</motion.div>
	)
}

export default InvoicePage
