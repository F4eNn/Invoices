'use client'
import React from 'react'
import Image from 'next/image'
import { useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { Filter } from './Filter'
import { useForm } from '@/hooks/useForm'
import { useInvoice } from '@/hooks/useInvoice'
import { InvoiceFormValues } from '@/context/FormProviders'

export const InvoiceControl = () => {
	const targetReached = useMediaQuery('576')
	const { numberOfInvoices } = useInvoice()
	const { toggleForm } = useForm()

	const { reset } = useFormContext<InvoiceFormValues>()
	const showForm = () => {
		reset({
			sender: {
				city: '',
				country: '',
				postCode: '',
				streetAddress: '',
			},
			receiver: {
				clientStreetAddress: '',
				clientName: '',
				clientCity: '',
				clientCountry: '',
				clientEmail: '',
				clientPostCode: '',
			},
			invoiceDate: new Date(),
			paymentTerms: '30',
			projectDescription: '',
			items: [
				{
					name: '',
					price: 0,
					quantity: 0,
				},
			],
		})
		toggleForm()
	}

	return (
		<div className='flex items-center justify-between dark:text-white'>
			<div className='flex flex-col'>
				<h1 className='text-headingM lg:text-headingL '>Invoices</h1>
				<p className='text-[.7em] '>
					{targetReached ? `There are ${numberOfInvoices} total invoices` : `${numberOfInvoices} invoices `}
				</p>
			</div>
			<div className='inline-flex items-center gap-5 sm:gap-10'>
				<Filter />
				<div className='overflow-hidden rounded-[30px] bg-primary text-xl hover:bg-secondary'>
					<button className='py-3 pl-2 pr-3' onClick={showForm}>
						<div className='inline-flex items-center gap-3 md:gap-4'>
							<div className='flex h-8   w-8 items-center justify-center rounded-full bg-white'>
								<Image alt='' src='./assets/icon-plus.svg' width={14} height={14} />
							</div>
							<span className='mr-2 h-5 text-base'>{targetReached ? 'New Invoice' : 'New'}</span>
						</div>
					</button>
				</div>
			</div>
		</div>
	)
}
