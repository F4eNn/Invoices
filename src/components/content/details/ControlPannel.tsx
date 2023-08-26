import React from 'react'

import { Button } from '@/components/ui/Button'
import { Status } from '@/components/ui/Status'
import { InvoiceDataProviderType } from '@/context/InvoiceProvider'

type ControlPannelProps = {
	as: InvoiceDataProviderType['as']
	onEdit: () => void
}

export const ControlPannelDetails = ({ as, onEdit }: ControlPannelProps) => {
	return (
		<div className='mt-10 flex w-full items-center justify-between rounded-lg bg-white p-6 shadow-sm dark:bg-primaryDark'>
			<div className='flex w-full items-center justify-between gap-5 md:w-auto'>
				<span className='text-gray'>status</span>
				<Status as={as} />
			</div>
			<div className='fixed bottom-0 left-0 z-40 flex w-full justify-around gap-3 bg-none px-2 py-6  sm:justify-end sm:gap-6  sm:px-10  md:static md:p-0'>
				<div className='overflow-hidden rounded-[30px] bg-secondaryDark text-white'>
					<Button padding='sm:px-6' onClick={onEdit}>
						Edit
					</Button>
				</div>
				<div className='flex gap-3'>
					<div className='overflow-hidden rounded-[30px] bg-red text-white'>
						<Button padding='sm:px-6' onClick={() => {}}>
							Delete
						</Button>
					</div>
					<div className='overflow-hidden rounded-[30px] bg-primary text-white'>
						<Button padding='sm:px-6' onClick={() => {}}>
							Mark as Paid
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
