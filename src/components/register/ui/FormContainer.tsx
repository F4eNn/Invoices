import React, { ReactNode } from 'react'

export const FormContainer = ({ children }: { children: ReactNode }) => {
	return <div className='w-full max-w-[500px] mx-auto p-8 bg-white rounded-md '>{children}</div>
}
