import React from 'react'
import Link from 'next/link'

import { Status } from '../ui/Status'
import { ArrowRightIcon } from '../icons/ArrowRight'
import { type InvoiceDataProvider } from '@/context/InvoiceProvider'

type InvoiceItemProps = Partial<InvoiceDataProvider>

export const InvoiceItem = ({ formId, receiver, invoiceDate, totalPrice, as }: InvoiceItemProps) => {
	return (
		<Link
			href='Invoice'
			className='mt-7  flex  rounded-lg  border-2 border-white bg-white   text-lightDark shadow-md  duration-300  hover:border-primary dark:border-secondaryDark dark:bg-secondaryDark dark:text-white hover:dark:border-primary'
		>
			{/* desktop */}
			<div className='hidden w-full items-center justify-between p-5 md:inline-flex '>
				<div className='flex items-center justify-stretch gap-5 md:gap-10 lg:gap-16'>
					<p className='w-[75px] font-bold'>
						<span className='text-gray'>#</span>
						{formId}
					</p>
					<span className=':order-none order-2 w-max text-center font-[500] text-gray dark:text-rose'>
						Due {invoiceDate as string}
					</span>
					<span className=' w-[100px]  text-center font-[500] text-grayPurple dark:text-grayishWhite '>
						{receiver?.clientName === '' ? '~' : receiver?.clientName}
					</span>
				</div>
				<div className='flex items-center justify-between gap-5 md:gap-10 lg:gap-20'>
					<span className='font-bold'>£ {totalPrice}</span>
					<div className='flex items-center gap-5'>
						<Status as={as}/>
						<ArrowRightIcon />
					</div>
				</div>
			</div>
			{/* mobile */}
			<div className='flex w-full flex-col gap-6 p-4 sm:p-6 md:hidden'>
				<div className='flex justify-between'>
					<p className='text-xl font-bold'>
						<span className='text-gray'>#</span>
						{formId}
					</p>
					<span className=' font-[500]  text-grayPurple dark:text-grayishWhite '>{receiver?.clientName}</span>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex flex-col gap-2 '>
						<span className='font-[500] text-gray dark:text-rose'>Due {invoiceDate as string}</span>
						<span className='text-lg font-bold'>£ {totalPrice}</span>
					</div>
					<Status as={as} />
				</div>
			</div>
		</Link>
	)
}
