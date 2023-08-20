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
	receiver: {
		clientName: string
		clientEmail: string
		clientStreetAddress: string
		clientCity: string
		clientPostCode: string
		clientCountry: string
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
			receiver: {
				clientStreetAddress: '',
				clientName: '',
				clientCity: '',
				clientCountry: '',
				clientEmail: '',
				clientPostCode: '',
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
		<form onSubmit={handleSubmit(setInvoice)} className='h-full overflow-auto pr-5'>
			<BillFromForm control={control} error={errors} />
			<BillToForm control={control} error={errors}/>
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
