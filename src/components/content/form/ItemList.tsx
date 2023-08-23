import React from 'react'
import { Control, FieldErrors, UseFormWatch, useFieldArray } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { InvoiceFormValues } from './InvoiceForm'
import { DynamicItem } from './DynamicItem'

interface ItemList {
	control: Control<InvoiceFormValues>
	error: FieldErrors<InvoiceFormValues>
	watch: UseFormWatch<InvoiceFormValues>
}

export const ItemListForm = ({ control, error, watch }: ItemList) => {
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
					<DynamicItem control={control} error={error} remove={remove} fields={fields} watch={watch} />
				</div>
			</div>
			<div className='mt-3 overflow-hidden rounded-3xl bg-secondaryDark  text-white hover:bg-darkGray'>
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
