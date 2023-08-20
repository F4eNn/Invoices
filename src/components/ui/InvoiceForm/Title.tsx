import React, { ReactNode } from 'react'

export const InvoiceTitle = ({ children }: { children: ReactNode }) => {
	return <h2 className='mb-7 text-primary'>{children}</h2>
}
