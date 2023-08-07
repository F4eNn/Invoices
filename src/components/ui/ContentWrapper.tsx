import React, { ReactNode } from 'react'

export const ContentWrapper = ({ children }: { children: ReactNode }) => {
	return <div className='w-full max-w-[1280px] mx-auto mt-20 p-5'>{children}</div>
}
