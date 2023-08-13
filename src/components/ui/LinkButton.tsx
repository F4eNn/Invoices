import React, { ReactNode } from 'react'
import Link from 'next/link'

interface LinkProps {
	children: ReactNode
	url: string
	isSelected?: boolean
}

export const LinkButton = ({ children, url, isSelected = false }: LinkProps) => {
	return (
		<button
			className={`  hover:bg-secondary ${
				isSelected ? 'bg-gray/50' : ' bg-primary'
			} w-full text-white rounded-3xl  text-xl font-[500] hover:scale-[1.02] transition-all duration-200 tracking-wide`}>
			<Link
				className='w-full block h-full p-[7px] '
				href={url}>
				{children}
			</Link>
		</button>
	)
}
