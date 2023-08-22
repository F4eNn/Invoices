import React from 'react'
import { Control, FieldErrors, useFieldArray } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { InvoiceFormValues } from './InvoiceForm'
import { DeleteIcon } from '@/components/icons/Delete'
import { ControlInput } from './ControlInput'

interface ItemList {
	control: Control<InvoiceFormValues>
	error: FieldErrors<InvoiceFormValues>
}

export const ItemListForm = ({ control, error }: ItemList) => {
	const { fields, append, remove } = useFieldArray({
		name: 'items',
		control,
	})
	return (
		<div className='mb-[140px] mt-12'>
			<h2 className='text-xl'>Item List</h2>
			<table className='mt-7 w-full'>
				<thead className=''>
					<tr className=' mb-3   flex  text-left text-sm font-light '>
						<th className='w-6/12'>Item Name</th>
						<th className='ml-1'>Qty.</th>
						<th className='mx-8'>Price</th>
						<th className='ml-12'>Total</th>
						<th className=''></th>
					</tr>
				</thead>
				<tbody>
					{fields.map((field, idx) => (
						<tr key={field.id} className='mb-3 flex items-center justify-between gap-4'>
							<td className='w-full'>
								<ControlInput
									control={control}
									error={error.items?.[idx]?.name}
									id={`name${idx}`}
									name={`items.${idx}.name`}
									items={true}
								/>
							</td>
							<td className='w-2/12 '>
								<ControlInput
									type='number'
									control={control}
									error={error.items?.[idx]?.quantity}
									id={`quantity${idx}`}
									name={`items.${idx}.quantity`}
									items={true}
								/>
							</td>
							<td>
								<ControlInput
									control={control}
									type='number'
									error={error.items?.[idx]?.price}
									id={`price${idx}`}
									name={`items.${idx}.price`}
									items={true}
								/>
							</td>
							<td className='m'>186.25</td>
							<td>
								<button type='button' onClick={() => remove(idx)} className='group p-3 '>
									<DeleteIcon />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className='mt-3 overflow-hidden rounded-3xl bg-secondaryDark text-white hover:bg-darkGray'>
				<Button
					onClick={() =>
						append({
							name: '',
							price: 0,
							quantity: 0,
						})
					}
				>
					+ Add New Item
				</Button>
			</div>
			{(error.receiver ||
				error.sender ||
				error.invoiceDate ||
				error.paymentTerms ||
				error.projectDescription ||
				error.items) && <p className='mt-10 text-red '>- All fields must be added</p>}
			{(error.items || fields.length === 0) && <p className='mb-[130px] mt-4 text-red'>- An item must be added</p>}
		</div>
	)
}
