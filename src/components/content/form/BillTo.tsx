import React from 'react'
import { Control, type FieldErrors } from 'react-hook-form'

import { InvoiceTitle } from '@/components/ui/InvoiceForm/Title'
import { InvoiceFormValues } from './InvoiceForm'
import { ControlInput } from './ControlInput'

interface BillToTypeProps {
	control: Control<InvoiceFormValues>
	error: FieldErrors<InvoiceFormValues>
}

export const BillToForm = (props: BillToTypeProps) => {
	const error = props.error.receiver || {}
	return (
		<div className='mt-12'>
			<InvoiceTitle>Bill to</InvoiceTitle>
			<div className='flex flex-col gap-6'>
				<ControlInput
					{...props}
					error={error?.clientName}
					id='username'
					label="Client's Name"
					name='receiver.clientName'
				/>
				<ControlInput
					{...props}
					error={error?.clientEmail}
					id='email'
					label="Client's email"
					name='receiver.clientEmail'
				/>
				<ControlInput
					{...props}
					error={error?.clientStreetAddress}
					id='clientAddress'
					label='Street Address'
					name='receiver.clientStreetAddress'
				/>
			</div>
			<div className='mt-6 flex gap-5'>
				<ControlInput {...props} error={error?.clientCity} id='clientCity' label='City' name='receiver.clientCity' />
				<ControlInput
					{...props}
					error={error?.clientPostCode}
					id='clientPostCode'
					label='Post Code'
					name='receiver.clientPostCode'
				/>
				<ControlInput
					{...props}
					error={error?.clientCountry}
					id='clientCountry'
					label='Country'
					name='receiver.clientCountry'
				/>
			</div>
		</div>
	)
}
