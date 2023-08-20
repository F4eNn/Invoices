import React from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'

import { ErrorMessage } from '@/components/ui/Forms/ErrorMessage'
import { InputWrapper } from '@/components/ui/Forms/InputWrapper'
import { InvoiceFormValues } from './InvoiceForm'

interface ControlInputTypeProps {
	id: string
	name: 'sender.streetAddress' | 'sender.city' | 'sender.postCode' | 'sender.country'
	control: Control<InvoiceFormValues>
	error: FieldError | undefined
	label: 'Street Address' | 'City' | 'Post Code' | 'Country'
}

export const ControlInput = ({ id, error, name, control, label }: ControlInputTypeProps) => {
	return (
		<InputWrapper>
			<label htmlFor={id} className={`${error && 'text-red'} mb-2 text-sm flex justify-between items-center`}>
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
