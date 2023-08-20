import React from 'react'
import { useForm } from 'react-hook-form'

import { BillFromForm } from './BillFrom'
import { BillToForm } from './BillTo'
import { ItemListForm } from './ItemList'

export type InvoiceFormValues = {
	sender: {
		streetAddress: string
		city: string
		postCode: string
		country: string
	}
}

export const InvoiceForm = () => {
	const { handleSubmit, control, formState } = useForm<InvoiceFormValues>({
		defaultValues: {
			sender: {
				city: '',
				country: '',
				postCode: '',
				streetAddress: '',
			},
		},
	})

	const { errors } = formState

	const setInvoice = (data: InvoiceFormValues, e: any) => {
		const target = (e.nativeEvent as SubmitEvent).submitter?.id
		if (target === 'save') {
			console.log(data)
		}
	}

	return (
		<form onSubmit={handleSubmit(setInvoice)} className='h-full overflow-auto'>
			<BillFromForm control={control} error={errors} />
			<BillToForm />
			<ItemListForm />
			<button type='submit' id='save' className='border-1 p3 border-red bg-red'>
				Save & Send
			</button>
			<button type='submit' id='draft'>
				Save as Draft
			</button>
		</form>
	)
}
