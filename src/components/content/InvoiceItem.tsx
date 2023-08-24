import React from 'react'
import Link from 'next/link'

import { Status } from '../ui/Status'
import { ArrowRightIcon } from '../icons/ArrowRight'

export const InvoiceItem = () => {
	return (
		<Link
			href='Invoice'
			className='mt-7 inline-flex w-full items-center  justify-between rounded-lg border-2 border-white bg-white p-4 text-lightDark shadow-md  duration-300  hover:border-primary dark:border-secondaryDark dark:bg-secondaryDark dark:text-white hover:dark:border-primary'
		>
			<div className='flex items-center justify-stretch gap-20'>
				<p className='font-bold'>
					<span className='text-gray'>#</span>RT3080
				</p>
				<span className='font-[500] text-gray dark:text-rose'>Due 19 Aug 2021</span>
				<span className=' font-[500] text-grayPurple dark:text-grayishWhite '>Jensen Huang</span>
			</div>
			<div className='flex items-center justify-between gap-20'>
				<span className='font-bold'>£ 14,0002.33</span>
				<div className='flex items-center gap-5'>
					<Status as='paid'>Paid</Status>
					<ArrowRightIcon />
				</div>
			</div>
		</Link>
	)
}
