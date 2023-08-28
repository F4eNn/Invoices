import React from 'react'
import { useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/Button'
import { Status } from '@/components/ui/Status'
import { InvoiceDataProviderType } from '@/context/InvoiceProvider'
import { useInvoice } from '@/hooks/useInvoice'
import { DeleteModal } from './DeleteModal'
import { useToggle } from '@/hooks/useToggle'

type ControlPannelProps = {
	as: InvoiceDataProviderType['as']
	onEdit: () => void
}

export const ControlPannelDetails = ({ as, onEdit }: ControlPannelProps) => {
	const { updateSelectedInvoice, deleteInvoice } = useInvoice()
	const [isOpenModal, toggleModal] =useToggle()
	const params = useSearchParams()
	const invoiceId = params.get('invoiceId')
	if (!invoiceId) return

	const markAsPaid = () => updateSelectedInvoice(invoiceId, 'paid')
	const handleOpenModal = () => toggleModal()

	return (
		<div className='mt-10 flex w-full items-center justify-between rounded-lg bg-white p-6 shadow-sm dark:bg-primaryDark'>
			<div className='flex w-full items-center justify-between gap-5 md:w-auto'>
				<span className='text-gray'>status</span>
				<Status as={as} />
			</div>
			<div className='fixed bottom-0 left-0 z-10  flex w-full justify-around gap-3 bg-white bg-none px-2 py-6 shadow-lg dark:bg-primaryDark md:z-0 sm:justify-end  sm:gap-6 sm:px-10  sm:shadow-none  md:static md:p-0'>
				<Button
					bgDark='dark:bg-secondaryDark'
					bg='bg-lightGray'
					textColorDark='dark:text-white'
					bgHover='hover:bg-rose'
					bgHoverDark='dark:hover:bg-white'
					textColor='text-primaryDark'
					textHover='dark:hover:text-primaryDark'
					padding='sm:px-6'
					onClick={onEdit}
				>
					Edit
				</Button>
				<div className='flex gap-3'>
					<Button
						bg='bg-red'
						bgHover='hover:bg-lightRed'
						textColor='text-white'
						padding='sm:px-6'
						onClick={handleOpenModal}
					>
						Delete
					</Button>
					<Button
						bg='bg-primary'
						bgHover='hover:bg-secondary'
						textColor='text-white'
						padding='sm:px-6'
						onClick={markAsPaid}
					>
						Mark as Paid
					</Button>
				</div>
			</div>
			<DeleteModal delete={deleteInvoice} isOpenModal={isOpenModal} formId={invoiceId} closeModal={toggleModal} />
		</div>
	)
}
