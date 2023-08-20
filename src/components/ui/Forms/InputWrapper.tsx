import React, { ReactNode } from 'react'

export const InputWrapper = ({ children }: { children: ReactNode }) => {
	return <div className='relative flex flex-col'>{children}</div>
}
