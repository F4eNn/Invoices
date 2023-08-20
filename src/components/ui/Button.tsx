import React, { ReactNode } from 'react'

type ButtonProps = {
	children?: ReactNode
	onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`w-full rounded-[30px] bg-primary p-2 text-xl font-[500] tracking-wide text-white transition-transform hover:scale-[1.02] hover:bg-secondary`}
		>
			{children}
		</button>
	)
}
