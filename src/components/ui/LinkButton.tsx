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
			} w-full rounded-3xl text-xl  font-[500] tracking-wide text-white transition-all duration-200 hover:scale-[1.02]`}
		>
			<Link className='block h-full w-full p-[7px] ' href={url}>
				{children}
			</Link>
		</button>
	)
}
