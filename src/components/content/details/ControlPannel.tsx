import React from 'react'

import { Button } from '@/components/ui/Button'
import { Status } from '@/components/ui/Status'
export const ControlPannelDetails = () => {
	return (
		<div className='mt-10 flex w-full items-center justify-between rounded-lg dark:bg-primaryDark bg-white shadow-sm p-6'>
			<div className='flex w-full items-center justify-between gap-5 md:w-auto'>
				<span className='text-gray'>status</span>
				<Status as='pending' />
			</div>
			<div className='fixed bottom-0 left-0 z-40 flex w-full justify-around gap-3 bg-white px-2 py-6 dark:bg-primaryDark sm:justify-end sm:gap-6  sm:px-10  md:static md:p-0'>
				<div className='overflow-hidden rounded-[30px] bg-secondaryDark text-white'>
					<Button padding='sm:px-6' onClick={() => {}}>
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
