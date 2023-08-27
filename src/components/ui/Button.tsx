import React, { ReactNode } from 'react'

type ButtonProps = {
	children?: ReactNode
	onClick: () => void
	padding?: 'sm:px-6'
	bg?: string
	textColor?: string
	bgHover?: string
	bgHoverDark?: string
	textColorDark?: string
	textHover?: string
	bgDark?: string
	width?: 'w-max' | 'w-full'
}

export const Button = ({
	children,
	onClick,
	padding,
	bg,
	textColor,
	bgHover,
	bgHoverDark,
	textColorDark,
	textHover,
	bgDark,
	width = 'w-max',
}: ButtonProps) => {
	return (
		<button
			type='button'
			onClick={onClick}
			className={`${padding} ${bgDark} ${textHover} ${bgHoverDark}  ${textColorDark} ${width} rounded-[30px] ${bg} px-4  py-3
			 			font-[500] tracking-wide ${textColor} transition-colors duration-300 ${bgHover}`}
		>
			{children}
		</button>
	)
}
