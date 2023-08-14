import React, { ReactNode } from 'react'

export const ContentWrapper = ({ children }: { children: ReactNode }) => {
	return <div className='lg:flex-1 w-full max-w-[1280px] mx-auto mt-6 lg:mt-20 p-5'>{children}</div>
}
