import React, { ReactNode } from 'react'


type StatusProps = {
	children: ReactNode
	as: 'paid' | 'pending' | 'draft'
}

export const Status = ({ children, as }: StatusProps) => {
	return (
		<div className='bg-lightGreen/30 text-lightGreen rounded-md w-[125px]  text-center py-2.5'>
			<div className='inline-flex items-center gap-2.5 font-bold text-lg '>
				<div className='bg-lightGreen h-2.5 w-2.5 rounded-full ' />
				<span className='h-6'>{children}</span>
			</div>
		</div>
	)
}
