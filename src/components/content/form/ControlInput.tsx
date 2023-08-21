import React from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import Datepicker from 'react-tailwindcss-datepicker'

import { ErrorMessage } from '@/components/ui/Forms/ErrorMessage'
import { InputWrapper } from '@/components/ui/Forms/InputWrapper'
import { InvoiceFormValues } from './InvoiceForm'
import { emailValidation } from '@/constants/formValidation'

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
	| 'invoiceDate'
	| 'paymentTerms'

type FieldLabel =
	| 'Street Address'
	| 'City'
	| 'Post Code'
	| 'Country'
	// eslint-disable-next-line quotes
	| "Client's Name"
	// eslint-disable-next-line quotes
	| "Client's email"
	| 'Invoice Date'
	| 'Payment Terms'

interface ControlInputTypeProps {
	id: string
	name: FieldName
	control: Control<InvoiceFormValues>
	error: FieldError | undefined
	label: FieldLabel
	type?: 'text' | 'date' | 'email'
	as?: 'input' | 'select' | 'date'
}

export const ControlInput = ({
	id,
	error,
	name,
	control,
	label,
	as = 'input',
	type = 'text',
}: ControlInputTypeProps) => {
	return (
		<InputWrapper>
			<label htmlFor={id} className={`${error && 'text-red'} mb-2 flex items-center justify-between text-sm`}>
				{label}
				<ErrorMessage as='invoice' msg={error?.message} error={error} />
			</label>
			<Controller
				name={name}
				rules={(type === 'email' ? {...emailValidation}: {required: true}) }
				control={control}
				render={({ field }) => {
					if (as === 'input') {
						return (
							<input
								id={id}
								type={type}
								className={`invoice-input form-input ${error && 'invoice-error-input'}  font-bold `}
								{...field}
							/>
						)
					} else if (as === 'select') {
						return (
							<select id={type} className='invoice-input form-select' {...field}>
								<option value={30}>Net 30 Days</option>
								<option value={14}>Net 14 Days</option>
								<option value={7}>Net 7 Days</option>
								<option value={1}>Net 1 Days</option>
							</select>
						)
					}

					return (
						<Datepicker
							asSingle={true}
							useRange={false}
							minDate={new Date()}
							primaryColor='purple'
							onChange={field.onChange}
							//@ts-ignore
							value={field.value}
							inputClassName={`form-input invoice-input font-bold  ${error && 'invoice-error-input'} `}
						/>
					)
				}}
			/>
		</InputWrapper>
	)
}
