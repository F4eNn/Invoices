import React from 'react'

import { InvoiceForm } from './form/InvoiceForm'

export const Create = () => {
	return (
		<div className='fixed  inset-0 z-20 bg-lightDark/60'>
			<div className='relative h-screen w-full max-w-[750px] rounded-xl bg-white py-16 pl-40 pr-9 dark:bg-lightDark dark:text-lightGray overflow-hidden'>
				<h2 className='font-500 text-headingS'>New Invoice</h2>
				<InvoiceForm />
			</div>
		</div>
	)
}
