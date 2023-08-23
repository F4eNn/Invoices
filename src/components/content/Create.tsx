import React, { MouseEvent, useRef } from 'react'

import { InvoiceForm } from './form/InvoiceForm'
import { useInvoice } from '@/hooks/useInvoice'
import { AnimatePresence, motion } from '@/lib/motion'
import { animateForm } from '@/animations/animations'

export const Create = () => {
	const { toggleForm, isOpenForm } = useInvoice()
	const overlayRef = useRef<HTMLDivElement>(null)

	const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === overlayRef.current) toggleForm()
	}

	return (
		<AnimatePresence>
			{isOpenForm && (
				<motion.div
					{...animateForm}
					ref={overlayRef}
					onClick={handleOverlayClick}
					className='fixed  inset-0 z-20 bg-lightDark/60'
				>
					<div
						className=' relative z-[999] h-[100dvh] overflow-hidden rounded-xl bg-white py-16 
									pl-5 pr-3 sm:pl-14 sm:pr-9 dark:bg-lightDark dark:text-lightGray sm:w-full md:w-3/4 lg:w-full lg:max-w-[750px] lg:pl-40'
					>
						<h2 className='font-500 text-headingS'>New Invoice</h2>
						<InvoiceForm />
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
