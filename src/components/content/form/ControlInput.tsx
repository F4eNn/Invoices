import React from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'

import { ErrorMessage } from '@/components/ui/Forms/ErrorMessage'
import { InputWrapper } from '@/components/ui/Forms/InputWrapper'
import { InvoiceFormValues } from './InvoiceForm'

type FieldName =
	| 'sender.streetAddress'
	| 'sender.city'
	| 'sender.postCode'
	| 'sender.country'
	| 'receiver.clientName'
	| 'receiver.clientEmail'
	| 'receiver.clientStreetAddress'
	| 'receiver.clientCity'
	| 'receiver.clientPostCode'
	| 'receiver.clientCountry'

// eslint-disable-next-line quotes
type FieldLabel = 'Street Address' | 'City' | 'Post Code' | 'Country' | "Client's Name" | "Client's email"

interface ControlInputTypeProps {
	id: string
	name: FieldName
	control: Control<InvoiceFormValues>
	error: FieldError | undefined
	label: FieldLabel
}

export const ControlInput = ({ id, error, name, control, label }: ControlInputTypeProps) => {
	return (
		<InputWrapper>
			<label htmlFor={id} className={`${error && 'text-red'} mb-2 flex items-center justify-between text-sm`}>
				{label}
				<ErrorMessage as='invoice' msg='ddfsdf' error={error} />
			</label>
			<Controller
				name={name}
				rules={{ required: true }}
				control={control}
				render={({ field }) => (
					<input
						id={id}
						type='text'
						className={`invoice-input form-input ${error && 'invoice-error-input'}`}
						{...field}
					/>
				)}
			/>
		</InputWrapper>
	)
}
