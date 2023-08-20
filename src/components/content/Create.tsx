import React from 'react'

import { InvoiceForm } from './form/InvoiceForm'

export const Create = () => {
	return (
		<div className='fixed inset-0 z-20 bg-lightDark/60'>
			<div className='h-screen w-full max-w-[750px] rounded-xl bg-lightGray py-16 pl-40 pr-14 dark:bg-lightDark dark:text-lightGray'>
				<h2 className='font-500 text-headingS'>New Invoice</h2>
				<InvoiceForm />
			</div>
		</div>
	)
}
