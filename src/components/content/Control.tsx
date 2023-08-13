'use client'
import React from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export const Control = () => {
	const targetReached = useMediaQuery('576')

	return (
		<div className='flex justify-between dark:text-white'>
			<div className='flex flex-col'>
				<h1 className='text-headingM lg:text-headingL '>Invoices</h1>
				<p className='text-[.7em] '>{targetReached ? 'There are 7 total invoices' : '7 invoices '}</p>
			</div>
			<div>
				<Button onClick={() => {}}>
					<span className='flex justify-center ml-[-3px] items-center h-8 w-8 bg-white rounded-full'>
						<Image
							alt=''
							src='./assets/icon-plus.svg'
							width={12}
							height={12}
						/>
					</span>
					{targetReached ? 'New Invoice' : 'New'}
				</Button>
			</div>
		</div>
	)
}
