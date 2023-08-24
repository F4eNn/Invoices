import React from 'react'
import Link from 'next/link'

import { Status } from '../ui/Status'
import { ArrowRightIcon } from '../icons/ArrowRight'

export const InvoiceItem = () => {
	return (
		<Link
			href='Invoice'
			className='mt-7  flex  rounded-lg  border-2 border-white bg-white   text-lightDark shadow-md  duration-300  hover:border-primary dark:border-secondaryDark dark:bg-secondaryDark dark:text-white hover:dark:border-primary'
		>
{/* desktop */}
			<div className='hidden w-full items-center justify-between p-5 md:inline-flex '>
				<div className='flex items-center justify-stretch gap-5 md:gap-10 lg:gap-20'>
					<p className='font-bold'>
						<span className='text-gray'>#</span>RT3080
					</p>
					<span className=':order-none order-2 font-[500]  text-gray dark:text-rose'>Due 19 Aug 2021</span>
					<span className=' font-[500]  text-grayPurple dark:text-grayishWhite '>Jensen Huang</span>
				</div>
				<div className='flex items-center justify-between gap-5 md:gap-10 lg:gap-20'>
					<span className='font-bold'>£ 14,0002.33</span>
					<div className='flex items-center gap-5'>
						<Status as='paid'>Paid</Status>
						<ArrowRightIcon />
					</div>
				</div>
			</div>
{/* mobile */}
			<div className='flex w-full flex-col gap-6 p-4 sm:p-6 md:hidden'>
				<div className='flex justify-between'>
					<p className='text-xl font-bold'>
						<span className='text-gray'>#</span>RT3080
					</p>
					<span className=' font-[500]  text-grayPurple dark:text-grayishWhite '>Jensen Huang</span>
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex flex-col gap-2 '>
						<span className='font-[500] text-gray dark:text-rose'>Due 19 Aug 2021</span>
						<span className='text-lg font-bold'>£ 14,0002.33</span>
					</div>
					<Status as='paid'>Paid</Status>
				</div>
			</div>
		</Link>
	)
}
