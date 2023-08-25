import React, { useEffect, useState } from 'react'
import { Control, Controller, FieldError, RegisterOptions } from 'react-hook-form'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { ErrorMessage } from '@/components/ui/Forms/ErrorMessage'
import { InputWrapper } from '@/components/ui/Forms/InputWrapper'
import { emailValidation, generalInvoiceValidation, numberValidation } from '@/constants/formValidation'
import { InvoiceFormValues } from '@/context/FormProviders'

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
	| 'projectDescription'
	| `items.${number}.name`
	| `items.${number}.quantity`
	| `items.${number}.price`

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
	| 'Project Description'

interface ControlInputTypeProps {
	id: string
	name: FieldName
	control: Control<InvoiceFormValues>
	error: FieldError | undefined
	label?: FieldLabel
	placeholder?: string
	type?: 'text' | 'email' | 'number'
	as?: 'input' | 'select' | 'date'
	items?: boolean
}

export const ControlInput = ({
	id,
	error,
	name,
	control,
	label,
	placeholder,
	as = 'input',
	type = 'text',
	items = false,
}: ControlInputTypeProps) => {
	const [selectedRules, setSelectedRules] = useState<RegisterOptions>()

	useEffect(() => {
		switch (type) {
			case 'number':
				setSelectedRules({ ...numberValidation })
				break
			case 'email':
				setSelectedRules({ ...emailValidation })
				break
			case 'text':
				setSelectedRules({ ...generalInvoiceValidation })
				break
		}
		if (as === 'date') {
			setSelectedRules({ required: true })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [type])

	return (
		<InputWrapper>
			<label htmlFor={id} className={`${error && 'text-red'} mb-2 flex items-center justify-between text-sm`}>
				{label}
				{!items && <ErrorMessage as='invoice' msg={error?.message} error={error} />}
			</label>
			<Controller
				name={name}
				rules={selectedRules}
				control={control}
				render={({ field }) => {
					if (as === 'input') {
						return (
							<input
								id={id}
								type={type}
								placeholder={placeholder}
								className={`invoice-input remove-input-arrows form-input  ${
									error && 'invoice-error-input'
								}  font-bold `}
								value={field.value as string}
								onChange={e => field.onChange(e.target.value)}
							/>
						)
					} else if (as === 'select') {
						return (
							<select
								id={type}
								className='invoice-input form-select'
								value={field.value as number}
								onChange={e => field.onChange(e.target.value)}
							>
								<option value={30}>Net 30 Days</option>
								<option value={14}>Net 14 Days</option>
								<option value={7}>Net 7 Days</option>
								<option value={1}>Net 1 Days</option>
							</select>
						)
					}
					return (
						<ReactDatePicker
							onChange={(date) => field.onChange(date)}
							selected={field.value as Date}
							minDate={new Date()}
							className='invoice-input form-input'
						/>
					)
				}}
			/>
		</InputWrapper>
	)
}
