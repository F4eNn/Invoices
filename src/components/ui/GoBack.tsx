import Link from 'next/link'
import React from 'react'

import { navigation } from '@/constants/navigation_paths'
import { ArrowLeftIcon } from '@/components/icons/ArrowLeft'

export const GoBack = () => {
	return (
		<Link
			href={navigation.home.path}
			className='flex w-max items-center gap-6 p-4 text-secondaryDark transition-colors  hover:text-grayPurple dark:text-lightGray hover:dark:text-grayPurple '
		>
			<ArrowLeftIcon /> <span className='h-5 font-bold '>Go back</span>
		</Link>
	)
}
