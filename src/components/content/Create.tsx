'use client'
import React, { MouseEvent, useRef } from 'react'
import { useSearchParams } from 'next/navigation'

import { InvoiceForm } from './form/InvoiceForm'
import { useForm } from '@/hooks/useForm'
import { AnimatePresence, motion } from '@/lib/motion'
import { animateForm } from '@/animations/animations'

export const Create = () => {
	const { toggleForm, isOpenForm } = useForm()
	const overlayRef = useRef<HTMLDivElement>(null)

	const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === overlayRef.current) toggleForm()
	}

	const params = useSearchParams()
	const invoiceId = params.get('invoiceId')

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
									pl-5 pr-3 dark:bg-lightDark dark:text-lightGray sm:w-full sm:pl-14 sm:pr-9 md:w-3/4 lg:w-full lg:max-w-[900px] lg:pl-40'
					>
						<h2 className='font-500 text-headingS'>{invoiceId ? <span>Edit <span className='text-gray'>#</span>{invoiceId}</span> : 'New Invoice'}</h2>
						<InvoiceForm />
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
