import React, { ReactNode } from 'react'
import { Button as MuiButton } from '@mui/material'

interface ButtonProps {
	children: ReactNode
	bg: 'bg-red' | 'bg-primary' | 'bg-lightGray'
	bgHover: 'hover:bg-lightRed' | 'hover:bg-secondary' | 'hover:bg-rose'
	type?: 'submit'
	paddingR?: 'pr-4' 
}

export const Button = ({ children, bg, bgHover, type, paddingR }: ButtonProps) => {
	return (
		<MuiButton
			type={type}
			className={`rounded-3xl text-white flex justify-center w-full ${paddingR} gap-2 normal-case 3 ${bg} ${bgHover}`}>
			{children}
		</MuiButton>
	)
}
