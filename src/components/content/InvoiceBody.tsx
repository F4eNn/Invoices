'use client'
import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

import { NoInvoices } from './NoInvoices'
import { InvoiceItem } from './InvoiceItem'
import { useInvoice } from '@/hooks/useInvoice'

export const InvoiceBody = () => {
	const { filteredInvoiceData, fetching } = useInvoice()
	const isInvoice = filteredInvoiceData.length > 0
	return (
		<div className='mb-10 flex flex-col lg:mb-16'>
			{fetching ? (
				<div className='mt-40 flex aspect-square justify-center'>
					<PulseLoader color='#7C5DFA' size={25} speedMultiplier={0.8} />
				</div>
			) : (
				<>
					{!isInvoice ? (
						<NoInvoices />
					) : (
						<div className='mt-10 pr-3  '>
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
