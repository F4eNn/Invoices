import React from 'react'

// import { NoInvoices } from './NoInvoices'
import { InvoiceItem } from './InvoiceItem'
import { useInvoice } from '@/hooks/useInvoice'

export const InvoiceBody = () => {

	const {invoiceData} = useInvoice()
	return (
		<div className='flex  flex-1 flex-col'>
			{/* <NoInvoices /> */}
			<div className='mt-10'>
				{invoiceData.map((item,idx) => {
					return <InvoiceItem key={item.formId + idx} {...item} />
				})}
				
			</div>
		</div>
	)
}
