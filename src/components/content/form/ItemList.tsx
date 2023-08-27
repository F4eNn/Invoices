import React from 'react'
import { Control, FieldErrors, useFieldArray } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { DynamicItem } from './DynamicItem'
import { InvoiceFormValues } from '@/context/FormProviders'

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
					<DynamicItem control={control} error={error} remove={remove} fields={fields} />
				</div>
			</div>
			<Button
				bg='bg-secondaryDark'
				textColor='text-white'
				bgHover='hover:bg-darkGray'
				width='w-full'
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
