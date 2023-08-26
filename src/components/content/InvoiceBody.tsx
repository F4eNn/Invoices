import React from 'react'

import { NoInvoices } from './NoInvoices'
import { InvoiceItem } from './InvoiceItem'
import { useInvoice } from '@/hooks/useInvoice'

export const InvoiceBody = () => {
	const { filteredInvoiceData } = useInvoice()
	const isInvoice = filteredInvoiceData.length > 0
	return (
		<div className='flex flex-col lg:h-screen  lg:overflow-hidden'>
			{!isInvoice ? (
				<NoInvoices />
			) : (
				<div className=' dark:form-scroll form-scroll-light mt-10 overflow-auto pr-3'>
					{filteredInvoiceData.map((item, idx) => {
						return <InvoiceItem key={item.formId + idx} {...item} />
					})}
				</div>
			)}
		</div>
	)
}
