import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

import { NoInvoices } from './NoInvoices'
import { InvoiceItem } from './InvoiceItem'
import { useInvoice } from '@/hooks/useInvoice'

export const InvoiceBody = () => {
	const { filteredInvoiceData, fetching } = useInvoice()
	const isInvoice = filteredInvoiceData.length > 0
	return (
		<div className='flex flex-col lg:h-screen  lg:overflow-hidden'>
			{fetching ? (
				<div className='aspect-square flex justify-center mt-40'>
					<PulseLoader color='#7C5DFA' size={25} speedMultiplier={0.8} />
				</div>
			) : (
				<>
					{!isInvoice ? (
						<NoInvoices />
					) : (
						<div className=' dark:form-scroll form-scroll-light mt-10 overflow-auto pr-3'>
							{filteredInvoiceData.map((item, idx) => {
								return <InvoiceItem key={item.formId + idx} {...item} />
							})}
						</div>
					)}
				</>
			)}
		</div>
	)
}
