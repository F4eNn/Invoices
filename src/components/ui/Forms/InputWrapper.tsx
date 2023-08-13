import React, { ReactNode } from 'react'

export const InputWrapper = ({ children }: { children: ReactNode }) => {
	return <div className='flex flex-col'>{children}</div>
}
