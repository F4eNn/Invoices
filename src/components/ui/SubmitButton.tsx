import React, { ReactNode } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

interface SubmitButtonProps {
	children: ReactNode
	isSubmitting: boolean
	id?: 'save' | 'draft'
	padding?: 'p-2' | 'p-3'
	bg?: string
	textColor?: string
	bgHover?: string
	width?: 'w-max' |'w-full'
	rounded?: string
}

export const SubmitButton = ({
	children,
	isSubmitting,
	id,
	padding = 'p-2',
	bg,
	textColor,
	bgHover,
	width = 'w-full',
	rounded 
}: SubmitButtonProps) => {
	return (
		<button
			id={id}
			type='submit'
			className={`${padding} ${width} ${bg} ${rounded} sm:px-6 ${textColor} transition-color ${bgHover} duration-300 `}
		>
			{isSubmitting ? <PulseLoader color='#fff' size={10} /> : children}
		</button>
	)
}
