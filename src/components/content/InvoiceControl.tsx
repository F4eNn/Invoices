'use client'
import React from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { Filter } from './Filter'

export const InvoiceControl = () => {
	const targetReached = useMediaQuery('576')

	return (
		<div className='flex items-center justify-between dark:text-white'>
			<div className='flex flex-col'>
				<h1 className='text-headingM lg:text-headingL '>Invoices</h1>
				<p className='text-[.7em] '>{targetReached ? 'There are 7 total invoices' : '7 invoices '}</p>
			</div>
			<div className='inline-flex items-center gap-5 sm:gap-10'>
				<Filter />
				<div>
					<Button onClick={() => {}}>
						<div className='inline-flex items-center gap-3 md:gap-4'>
							<div className='h-8 w-8   flex items-center justify-center bg-white rounded-full'>
								<Image
									alt=''
									src='./assets/icon-plus.svg'
									width={14}
									height={14}
								/>
							</div>
							<span className='text-base h-5 mr-2'>{targetReached ? 'New Invoice' : 'New'}</span>
						</div>
					</Button>
				</div>
			</div>
		</div>
	)
}
