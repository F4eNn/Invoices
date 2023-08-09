'use client'
import React from 'react'
import Image from 'next/image'
import {signOut} from 'next-auth/react'

import { Button } from '@/components/ui/Button'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export const Nav = () => {
	const media = useMediaQuery('(min-width: 576px)')

	return (
		<div className='flex justify-between dark:text-white'>
			<div className='flex flex-col'>
				<h1 className='text-headingM lg:text-headingL '>Invoices</h1>
				<p className='text-[.7em] '>{media ? 'There are 7 total invoices' : '7 invoices '}</p>
			</div>
			<div>
				<Button
					paddingR='pr-4'
					bg='bg-primary'
					bgHover='hover:bg-secondary'>
					<span className='flex justify-center ml-[-3px] items-center h-8 w-8 bg-white rounded-full'>
						<Image
							alt=''
							src='./assets/icon-plus.svg'
							width={12}
							height={12}
						/>
					</span>
					{media ? 'New Invoice' : 'New'}
				</Button>
			</div>
				<button onClick={() => signOut()} className='bg-red rounded-xl p-3'>Logout</button>
		</div>
	)
}
