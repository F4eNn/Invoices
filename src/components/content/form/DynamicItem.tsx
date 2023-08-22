import React from 'react'
import { Control, FieldErrors } from 'react-hook-form'

import { DeleteIcon } from '@/components/icons/Delete'
import { ControlInput } from './ControlInput'
import { InvoiceFormValues } from './InvoiceForm'

interface DynamicItemProps {
	control: Control<InvoiceFormValues>
	error: FieldErrors<InvoiceFormValues>
}

export const DynamicItem = ({ control, error }: DynamicItemProps) => {
	return (
		<>
			<tr className='mb-3 flex items-center justify-between gap-4'>
				<td className='w-full'>
					{/* <ControlInput control={control} error={error.}/> */}
					<input type='text' className='invoice-input form-input' />
				</td>
				<td className='w-2/12'>{/* <ControlInput /> */}</td>
				<td>
					{/* <ControlInput /> */}
					<input type='text' className='invoice-input form-input' />
				</td>
				<td>186.25</td>
				<td>
					<button type='button' className='group p-3 '>
						<DeleteIcon />
					</button>
				</td>
			</tr>
		</>
	)
}
