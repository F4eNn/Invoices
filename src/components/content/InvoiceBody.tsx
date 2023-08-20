import Image from 'next/image'
import React from 'react'

export const InvoiceBody = () => {
	return (
		<div className='flex flex-grow  flex-col items-center justify-center gap-12 text-white'>
			<div className='relative aspect-square w-full max-w-[350px] object-cover'>
				<Image src='./assets/illustration-empty.svg' alt='' fill className=' object-contain' />
			</div>
			<div
				className=' text-center text-lightDark dark:text-lightGray
			'
			>
				<h2 className='text-headingM font-bold'>There is nothing here</h2>
				<div className='mt-5  dark:text-rose text-gray'>
					<p>Create an invoice by clicking the </p>
					<p>
						<span className='font-bold'> New Invoice</span> button and get started
					</p>
				</div>
			</div>
		</div>
	)
}
