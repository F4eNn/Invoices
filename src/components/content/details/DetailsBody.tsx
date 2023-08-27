'use client'
import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import { AiFillPrinter } from 'react-icons/ai'
import { Tooltip } from '@mui/material'

import { DynamicDetails } from './DynamicDetails'
import { InvoiceDataProviderType } from '@/context/InvoiceProvider'
import { useFormatDate } from '@/hooks/useFormatDate'

export const DetailsBody = ({
	formId,
	invoiceDate,
	items,
	projectDescription,
	receiver,
	sender,
	totalPrice,
	paymentDue,
}: Omit<InvoiceDataProviderType, 'as' | 'paymentTerms'>) => {
	const { city, country, postCode, streetAddress } = sender
	const { clientCity, clientCountry, clientEmail, clientName, clientPostCode, clientStreetAddress } = receiver
	const [payTo] = useFormatDate(paymentDue)
	const detailsRef = useRef<HTMLDivElement>(null)

	return (
		<>
			<div className='mb-24 mt-10 flex flex-col gap-5 rounded-lg bg-white px-5 py-5 text-grayPurple  shadow-sm dark:bg-primaryDark dark:text-rose  '>
				<ReactToPrint
					trigger={() => (
						<Tooltip title='Print' placement='left'>
							<button
								aria-label='print invoice'
								className='ml-auto w-max rounded-xl bg-primary p-3.5  capitalize text-white '
							>
								<AiFillPrinter />
							</button>
						</Tooltip>
					)}
					content={() => detailsRef.current}
				/>
				<div ref={detailsRef} className='flex flex-col gap-6 rounded-lg px-5 py-5 md:px-10 '>
					<div className='flex flex-col gap-12 sm:gap-6 '>
						<div className='flex flex-wrap items-start justify-between gap-12'>
							<div className='flex flex-col gap-2'>
								<p className='text-xl font-bold text-primaryDark dark:text-lightGray'>
									<span className='dark:text-gray '>#</span>
									{formId}
								</p>
								<span>{projectDescription}</span>
							</div>
							<div className='flex flex-col  text-right'>
								<span>{streetAddress}</span>
								<span>{city}</span>
								<span>{postCode}</span>
								<span>{country}</span>
							</div>
						</div>
						<div className='flex w-full flex-wrap items-start justify-between gap-14'>
							<div className='flex flex-1 justify-between gap-10'>
								<div className='flex min-w-max flex-1 flex-col justify-between'>
									<div className='flex flex-col gap-3'>
										<span>Invoice Date</span>
										<span className='font-bold text-primaryDark dark:text-white'>{invoiceDate as string}</span>
									</div>
									<div className='flex flex-col gap-3'>
										<span>Payment Due</span>
										<span className='font-bold text-primaryDark dark:text-white'>{payTo}</span>
									</div>
								</div>
								<div className='flex min-w-max flex-1 flex-col '>
									<span>Bill To</span>
									<span className='my-2 font-bold text-primaryDark dark:text-white'>{clientName}</span>
									<span>{clientStreetAddress}</span>
									<span>{clientCity}</span>
									<span>{clientPostCode}</span>
									<span>{clientCountry}</span>
								</div>
							</div>
							<div className='flex flex-1 flex-col gap-3'>
								<span>Sent to</span>
								<span className='font-bold text-primaryDark dark:text-white'>{clientEmail}</span>
							</div>
						</div>
					</div>

					<div className='relative mt-10 flex flex-col overflow-hidden rounded-lg bg-lightGray px-5 py-10 shadow-sm dark:bg-secondaryDark md:p-10'>
						{/* desktop */}
						<div className='mb-32 flex flex-col gap-7'>
							<div className=' hidden items-center justify-between md:flex'>
								<span className='flex-1'>Item Name</span>

								<div className='flex flex-1 justify-between'>
									<span>QTY.</span>
									<span>Price</span>
									<span>Total</span>
								</div>
							</div>
							<DynamicDetails items={items} />
						</div>
						<div className='absolute bottom-0 left-0 right-0 flex  items-center justify-between bg-darkGray px-5 py-10 text-lightGray dark:bg-black md:p-10'>
							<span>Amount Due</span>
							<span className='text-3xl font-bold'>£ {totalPrice}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
