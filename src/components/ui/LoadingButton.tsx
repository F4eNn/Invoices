import React, { ReactNode } from 'react'
import { LoadingButton as MuiLoadingButton } from '@mui/lab'

export const LoadingButton = ({ children, isSubmitting }: { children: ReactNode; isSubmitting: boolean }) => {
	return (
		<MuiLoadingButton
			type='submit'
			loading={isSubmitting}
			className='bg-primary hover:bg-secondary text-white w-full'>
			{children}
		</MuiLoadingButton>
	)
}