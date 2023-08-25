import React, { ReactNode } from 'react'

type ContentWrapperProp = {
	children: ReactNode
	mt?: 'lg:mt-10' | 'lg:mt-20'
}

export const ContentWrapper = ({ children, mt = 'lg:mt-20' }: ContentWrapperProp) => {
	return <div className={`mx-auto mt-6 w-full max-w-[1000px] p-5 ${mt} lg:flex-1`}>{children}</div>
}
