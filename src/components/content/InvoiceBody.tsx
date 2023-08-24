import React from 'react'

// import { NoInvoices } from './NoInvoices'
import { InvoiceItem } from './InvoiceItem'

export const InvoiceBody = () => {
	return (
		<div className='flex  flex-1 flex-col'>
			{/* <NoInvoices /> */}
			<div className='mt-10'>
				<InvoiceItem />
				<InvoiceItem />
				<InvoiceItem />
				<InvoiceItem />
				<InvoiceItem />
			</div>
		</div>
	)
}
