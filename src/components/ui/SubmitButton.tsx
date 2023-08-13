import React, { ReactNode } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

export const SubmitButton = ({ children, isSubmitting }: { children: ReactNode; isSubmitting: boolean }) => {
	return (
		<button
			type='submit'
			className=' w-full bg-primary hover:bg-secondary uppercase text-white p-2  transition-colors duration-300 rounded-xl text-base'>
			{isSubmitting ? (
				<PulseLoader
					color='#fff'
					size={10}
				/>
			) : (
				children
			)}
		</button>
	)
}
