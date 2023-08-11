import React, { ReactNode } from 'react'

import { MuiLoadingButton } from '@/components/lib/muiLab'

export const LoadingButton = ({ children, isSubmitting }: { children: ReactNode; isSubmitting: boolean }) => {
	return (
		<MuiLoadingButton
			type='submit'
			loading={isSubmitting}
			className='base-button'>
			{children}
		</MuiLoadingButton>
	)
}
