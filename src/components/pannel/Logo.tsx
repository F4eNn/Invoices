import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { navigation } from '@/constants/navigation_paths'

export const Logo = () => {
	return (
		<Link aria-label='go to home page' href={navigation.home.path} className=' relative flex h-full w-24 overflow-hidden rounded-br-3xl rounded-tr-3xl  bg-primary lg:h-28 lg:w-full'>
			<div className='mt-auto h-1/2 w-full rounded-tl-3xl  bg-secondary'></div>
			<div className=' absolute flex h-full w-full items-center justify-center'>
				<Image alt='logo' src='./assets/logo.svg' width={35} height={35} />
			</div>
		</Link>
	)
}
