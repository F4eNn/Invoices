import React, { ReactNode } from 'react'

export const ContentWrapper = ({ children }: { children: ReactNode }) => {
	return <div className='mx-auto mt-6 w-full max-w-[1280px] p-5 lg:mt-20 lg:flex-1'>{children}</div>
}
