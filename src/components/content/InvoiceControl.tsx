'use client'
import React from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { Filter } from './Filter'
import { useMenageForm } from '@/hooks/useMenageForm'

export const InvoiceControl = () => {
	const targetReached = useMediaQuery('576')
	const { toggleForm } = useMenageForm()

	return (
		<div className='flex items-center justify-between dark:text-white'>
			<div className='flex flex-col'>
				<h1 className='text-headingM lg:text-headingL '>Invoices</h1>
				<p className='text-[.7em] '>{targetReached ? 'There are 7 total invoices' : '7 invoices '}</p>
			</div>
			<div className='inline-flex items-center gap-5 sm:gap-10'>
				<Filter />
				<div className='overflow-hidden rounded-[30px] bg-primary text-xl hover:bg-secondary'>
					<Button onClick={() => toggleForm()}>
						<div className='inline-flex items-center gap-3 md:gap-4'>
							<div className='flex h-8   w-8 items-center justify-center rounded-full bg-white'>
								<Image alt='' src='./assets/icon-plus.svg' width={14} height={14} />
							</div>
							<span className='mr-2 h-5 text-base'>{targetReached ? 'New Invoice' : 'New'}</span>
						</div>
					</Button>
				</div>
			</div>
		</div>
	)
}
