import React from 'react'
import { Control, FieldArrayWithId, FieldErrors, UseFieldArrayRemove, useFormContext } from 'react-hook-form'

import { DeleteIcon } from '@/components/icons/Delete'
import { ControlInput } from './ControlInput'
import { InvoiceFormValues } from '@/context/FormProviders'

interface DynamicItemProps {
	control: Control<InvoiceFormValues>
	error: FieldErrors<InvoiceFormValues>
	fields: FieldArrayWithId<InvoiceFormValues, 'items', 'id'>[]
	remove: UseFieldArrayRemove
}

export const DynamicItem = ({ control, error, fields, remove }: DynamicItemProps) => {
	const { watch } = useFormContext<InvoiceFormValues>()

	const totalSum = (idx: number) => {
		const quantity = watch(`items.${idx}.quantity`) as number
		const price = watch(`items.${idx}.price`) as number
		const total = (price * quantity).toFixed(2)
		return total
	}

	return (
		<>
			{fields.map((field, idx) => (
				<div key={field.id} className='mb-3 flex flex-col justify-center gap-4 lg:flex-row lg:items-center'>
					<div className='mt-10 w-full lg:mt-0'>
						<span className='lg:hidden'>Item name</span>
						<ControlInput
							control={control}
							error={error.items?.[idx]?.name}
							id={`name${idx}`}
							name={`items.${idx}.name`}
							items={true}
						/>
					</div>
					<div className='flex items-center gap-4'>
						<div className='w-5/12 '>
							<span className='lg:hidden'>Qty.</span>
							<ControlInput
								type='number'
								control={control}
								error={error.items?.[idx]?.quantity}
								id={`quantity${idx}`}
								name={`items.${idx}.quantity`}
								items={true}
							/>
						</div>
						<div>
							<span className='lg:hidden'>Price</span>
							<ControlInput
								control={control}
								type='number'
								error={error.items?.[idx]?.price}
								id={`price${idx}`}
								name={`items.${idx}.price`}
								items={true}
							/>
						</div>
						<div className='flex  flex-col '>
							<span className='absolute -top-3.5 left-1 lg:hidden '>Total</span>
							<span className='mt-8 w-[45px] lg:mt-3'>{totalSum(idx)}</span>
						</div>
						<div>
							<button type='button' onClick={() => remove(idx)} className='group mt-7 p-3 lg:mt-2.5'>
								<DeleteIcon />
							</button>
						</div>
					</div>
				</div>
			))}
		</>
	)
}
