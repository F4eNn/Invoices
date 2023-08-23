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

			<div className='mb-3 flex flex-col justify-between text-sm '>
				<div className='hidden lg:flex  '>
					<span className='md:w-6/12'>Item Name</span>
					<span className='ml-1'>Qty.</span>
					<span className='mx-8'>Price</span>
					<span className='ml-12'>Total</span>
					<span className=''></span>
				</div>
				<div>
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
								<div className=' relative flex h-full flex-col '>
									<span className='absolute -top-3.5 left-1 lg:hidden '>Total</span>
									<span className='mt-8'>186.54</span>
								</div>
								<div>
									<button type='button' onClick={() => remove(idx)} className='group p-3 '>
										<DeleteIcon />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

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
