import React from 'react'
import { type Control, type FieldErrors } from 'react-hook-form'

import { ControlInput } from './ControlInput'
import { InvoiceTitle } from '@/components/ui/InvoiceForm/Title'
import { InvoiceFormValues } from '@/context/FormProviders'

interface BillFromProps {
	control: Control<InvoiceFormValues>
	error: FieldErrors<InvoiceFormValues>
}

export const BillFromForm = (props: BillFromProps) => {
	const error = props.error.sender || {}
	return (
		<div className='mt-12'>
			<InvoiceTitle>Bill from</InvoiceTitle>
			<ControlInput
				{...props}
				error={error.streetAddress}
				id='address'
				label='Street Address'
				name='sender.streetAddress'
			/>
			<div className='mt-6 flex gap-5 flex-col md:flex-row  '>
				<div className='flex justify-between gap-5'>
					<ControlInput {...props} error={error.city} id='city' name='sender.city' label='City' />
					<ControlInput {...props} error={error.postCode} id='postCode' name='sender.postCode' label='Post Code' />
				</div>
				<div>
					<ControlInput {...props} error={error.country} id='country' name='sender.country' label='Country' />
				</div>
			</div>
		</div>
	)
}
