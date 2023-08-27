import Image from 'next/image'
import React from 'react'

export const NoInvoices = () => {
	return (
		<div className='mt-12 flex  flex-col items-center justify-center gap-7 text-white sm:mt-16 sm:gap-10 md:mt-24 lg:mt-24  lg:gap-12'>
			<div className='relative  aspect-square w-full max-w-[300px] object-cover  lg:max-w-[350px]'>
				<Image src='./assets/illustration-empty.svg' alt='' fill className=' object-contain' />
			</div>
			<div className='text-center text-lightDark dark:text-lightGray'>
				<h2 className='text-headingM font-bold'>There is nothing here</h2>
				<div className='mt-5  text-gray dark:text-rose'>
					<p>Create an invoice by clicking the </p>
					<p>
						<span className='font-bold'> New Invoice</span> button and get started
					</p>
				</div>
			</div>
		</div>
	)
}
