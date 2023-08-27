import React, { MouseEvent, useRef } from 'react'
import { useRouter } from 'next/navigation'

import { Portal } from '@/constants/Portal'
import { Button } from '@/components/ui/Button'
import { navigation } from '@/constants/navigation_paths'
import { AnimatePresence, motion } from '@/lib/motion'
import { animateModal } from '@/animations/animations'
import { notify } from '@/constants/notify'

type DeleteModalProps = {
	formId: string
	delete: (_formId: string) => Promise<void>
	closeModal: () => void
	isOpenModal: boolean
}

export const DeleteModal = ({ formId, isOpenModal, delete: deleteDoc, closeModal }: DeleteModalProps) => {
	const { replace } = useRouter()
	const overlayRef = useRef<HTMLDivElement>(null)

	const handleCloseModal = () => closeModal()
	const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => e.target === overlayRef.current && closeModal()

	const handleDeleteInvoice = async () => {
		await deleteDoc(formId)
		replace(navigation.home.path)
			notify(`Deleted successfully`)

	}

	return (
		<Portal selector='#modal'>
			<AnimatePresence>
				{isOpenModal && (
					<motion.div
                        {...animateModal}
						ref={overlayRef}
						onClick={handleOverlayClick}
						className=' fixed bottom-0 left-0 right-0 top-0 z-[99]  flex flex-col items-center justify-center bg-black/50'
					>
						<div className='mx-3 max-w-[600px] rounded-xl bg-white  p-7 text-gray drop-shadow-lg dark:bg-primaryDark dark:text-white sm:p-10 md:p-14 '>
							<div className='flex flex-col gap-4'>
								<h3 className='text-2xl font-bold text-primaryDark dark:text-white sm:text-3xl '>Confirm Deletion</h3>
								<p className='dark:text-rose'>
									Are you sure you want to delete invoice #XM9141? This action cannot be undone.
								</p>
							</div>
							<div className=' mt-7 flex justify-end gap-3 '>
								<Button
									padding='sm:px-6'
									bg='bg-lightGray'
									bgDark='dark:bg-secondaryDark'
									textColor='text-gray'
                                    textColorDark='dark:text-rose'
									onClick={handleCloseModal}
								>
									Cancel
								</Button>
								<Button
									padding='sm:px-6'
									textColor='text-white'
									bg='bg-red'
									bgHover='hover:bg-lightRed'
									onClick={handleDeleteInvoice}
								>
									Delete
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</Portal>
	)
}
