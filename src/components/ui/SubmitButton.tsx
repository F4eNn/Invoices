import React, { ReactNode } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'

export const SubmitButton = ({ children, isSubmitting }: { children: ReactNode; isSubmitting: boolean }) => {
	return (
		<button
			type='submit'
			className=' w-full rounded-xl bg-primary p-2 text-base uppercase  text-white transition-colors duration-300 hover:bg-secondary'
		>
			{isSubmitting ? <PulseLoader color='#fff' size={10} /> : children}
		</button>
	)
}
