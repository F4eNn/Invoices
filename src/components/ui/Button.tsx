import React, { ReactNode } from 'react'
import { Button as MuiButton } from '@mui/material'

interface ButtonProps {
	children: ReactNode
	bg: 'bg-red' | 'bg-primary' | 'bg-lightGray'
	bgHover: 'hover:bg-lightRed' | 'hover:bg-secondary' | 'hover:bg-rose'
}

export const Button = ({ children, bg, bgHover }: ButtonProps) => {
	return (
		<MuiButton className={`rounded-3xl text-red flex justify-start gap-2 normal-case 3 ${bg} ${bgHover}`}>
			{children}
		</MuiButton>
	)
}
