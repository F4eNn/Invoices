import React from 'react'

import { NoInvoices } from './NoInvoices'
import { InvoiceItem } from './InvoiceItem'
import { useInvoice } from '@/hooks/useInvoice'

export const InvoiceBody = () => {
	const { invoiceData } = useInvoice()
	const isInvoice = invoiceData.length > 0
	return (
		<div className='flex flex-col lg:h-screen  lg:overflow-hidden'>
			{!isInvoice ? (
				<NoInvoices />
			) : (
				<div className=' dark:form-scroll form-scroll-light mt-10 overflow-auto pr-3'>
					{invoiceData.map((item, idx) => {
						return <InvoiceItem key={item.formId + idx} {...item} />
					})}
				</div>
			)}
		</div>
	)
}
