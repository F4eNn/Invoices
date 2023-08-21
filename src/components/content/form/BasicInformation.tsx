import React from 'react'
import { Control, FieldErrors } from 'react-hook-form'

import { InvoiceFormValues } from './InvoiceForm'
import { ControlInput } from './ControlInput'

interface BasicInformationProps {
	control: Control<InvoiceFormValues>

	error: FieldErrors<InvoiceFormValues>
}

export const BasicInformation = ({ control, error }: BasicInformationProps) => {
	return (
		<div className='mb-[120px] mt-12'>
			<div className='  flex gap-10'>
				<div className='w-full'>
					<ControlInput
						as='date'
						control={control}
						error={error.invoiceDate}
						id='date'
						label='Invoice Date'
						name='invoiceDate'
					/>
				</div>
				<div className='w-full '>
					<ControlInput
						as='select'
						control={control}
						error={error.paymentTerms}
						id='terms'
						label='Payment Terms'
						name='paymentTerms'
					/>
				</div>
			</div>
		</div>
	)
}
