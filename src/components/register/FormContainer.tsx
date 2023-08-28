import React, { ReactNode } from 'react'

export const FormContainer = ({ children }: { children: ReactNode }) => {
	return <div className='mx-auto w-full max-w-[500px] rounded-md bg-white p-8 '>{children}</div>
}
