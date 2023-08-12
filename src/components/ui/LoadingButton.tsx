import React, { ReactNode } from 'react'
import {Button as MuiButton } from '@mui/material'
import PulseLoader from 'react-spinners/PulseLoader'

export const LoadingButton = ({ children, isSubmitting }: { children: ReactNode; isSubmitting: boolean }) => {
	return (
		<MuiButton
			type='submit'
			className=' w-full !bg-primary hover:!bg-secondary !text-white  !h-[40px] !rounded-xl !text-base  '>
				{isSubmitting ? <PulseLoader color='#fff' size={10}/> : <span>{children}</span>}
		</MuiButton>
	)
}
