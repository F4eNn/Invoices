'use client'
import React from 'react'
import Image from 'next/image'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/Button'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { auth } from '@/config/firebase'
import { navigation } from '@/navigation_paths'

export const Nav = () => {
	const media = useMediaQuery('(min-width: 576px)')
	const router = useRouter()
	const logOut = async () => {
		try {
			await signOut(auth)
			router.replace(navigation.login.path)
		} catch (error) {
			console.error('Log out failed:', error)
		}
	}

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
			<button
				onClick={logOut}
				className='bg-red rounded-2xl p-3'>
				Logout
			</button>
		</div>
	)
}
