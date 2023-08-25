import React from 'react'
import { Control, FieldErrors } from 'react-hook-form'

import { ControlInput } from './ControlInput'
import { InvoiceFormValues } from '@/context/FormProviders'

interface BasicInformationProps {
	control: Control<InvoiceFormValues>

	error: FieldErrors<InvoiceFormValues>
}

export const BasicInformation = ({ control, error }: BasicInformationProps) => {
	return (
		<div className='mt-12'>
			<div className='  flex gap-10 flex-col sm:flex-row'>
				<div className='w-full'>
					<ControlInput
						control={control}
						as='date'
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
			<div className='mt-6'>
				<ControlInput
					control={control}
					error={error.projectDescription}
					id='project'
					label='Project Description'
					name='projectDescription'
					placeholder='e.g.Graphic Design Service'
				/>
			</div>
		</div>
	)
}
