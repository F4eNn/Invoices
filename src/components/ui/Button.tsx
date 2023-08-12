import React, { ReactNode } from 'react'

type ButtonProps = {
	children: ReactNode
	onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className='bg-primary hover:bg-secondary w-full text-white rounded-3xl p-[7px] text-xl font-[500] hover:scale-[1.02] transition-transform tracking-wide'>
			{children}
		</button>
	)
}
