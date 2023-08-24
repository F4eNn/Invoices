'use client'
import React from 'react'

import { Pannel } from '@/components/pannel/Pannel'
import { InvoiceDetails } from '@/components/content/InvoiceDetails'
import { InvoiceProvider } from '@/context/InvoiceProvider'
const InvoicePage = () => {
	return (
		<div className='flex h-full flex-col lg:flex-row  '>
			<Pannel />
			<InvoiceProvider>
				<InvoiceDetails />
			</InvoiceProvider>
		</div>
	)
}

export default InvoicePage
