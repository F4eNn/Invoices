import React from 'react'
import { type Control, type FieldErrors } from 'react-hook-form'

import { InvoiceFormValues } from './InvoiceForm'
import { ControlInput } from './ControlInput'

interface BillFromProps {
	control: Control<InvoiceFormValues>
	error: FieldErrors<InvoiceFormValues>
}

export const BillFromForm = (props: BillFromProps) => {
	const error = props.error.sender || {}
	return (
		<div className='mt-12'>
			<h3 className='mb-8 text-primary'>Bill From</h3>
			<ControlInput
				{...props}
				error={error.streetAddress}
				id='address'
				label='Street Address'
				name='sender.streetAddress'
			/>
			<div className='mt-8 flex gap-5'>
				<ControlInput {...props} error={error.city} id='city' name='sender.city' label='City' />
				<ControlInput {...props} error={error.postCode} id='postCode' name='sender.postCode' label='Post Code' />
				<ControlInput {...props} error={error.country} id='country' name='sender.country' label='Country' />
			</div>
		</div>
	)
}
