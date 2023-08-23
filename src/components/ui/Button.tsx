import React, { ReactNode } from 'react'

type ButtonProps = {
	children?: ReactNode
	onClick: () => void
	padding?: 'sm:px-6' 
}

export const Button = ({ children, onClick,padding }: ButtonProps) => {
	return (
		<button
		type='button'
			onClick={onClick}
			className={`${padding} w-full  bg-inherit p-3   font-[500] tracking-wide text-inherit transition-all hover:scale-[1.1] hover:bg-inherit`}
		>
			{children}
		</button>
	)
}
