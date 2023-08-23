import React, { ReactNode } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

interface SubmitButtonProps {
	children: ReactNode
	isSubmitting: boolean
	id?: 'save' | 'draft'
	padding?: 'p-2' | 'p-3'
}

export const SubmitButton = ({ children, isSubmitting, id, padding = 'p-2' }: SubmitButtonProps) => {
	return (
		<button
			id={id}
			type='submit'
			className={`${padding} w-full bg-inherit sm:px-6 text-inherit transition-all hover:scale-[1.1] duration-300 hover:bg-inherit`}
		>
			{isSubmitting ? <PulseLoader color='#fff' size={10} /> : children}
		</button>
	)
}
