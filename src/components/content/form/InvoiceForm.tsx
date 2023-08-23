import React from 'react'
import { useForm } from 'react-hook-form'
import randomstring from 'randomstring'

import { BillFromForm } from './BillFrom'
import { BillToForm } from './BillTo'
import { ItemListForm } from './ItemList'
import { SubmitButton } from '@/components/ui/SubmitButton'
import { Button } from '@/components/ui/Button'
import { BasicInformation } from './BasicInformation'
import { useInvoice } from '@/hooks/useInvoice'

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
	invoiceDate: Date
	paymentTerms: string
	projectDescription: string
	items: { name: string; quantity: number | undefined; price: number | undefined }[]
}

export const InvoiceForm = () => {
	const { toggleForm } = useInvoice()

	const { handleSubmit, control, formState, getValues } = useForm<InvoiceFormValues>({
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
			invoiceDate: new Date(),
			paymentTerms: '30',
			projectDescription: '',
			items: [
				{
					name: '',
					price: 0,
					quantity: 0,
				},
			],
		},
	})

	const { errors, isSubmitting } = formState

	const lettersFormId = randomstring.generate({length: 2, capitalization: 'uppercase', charset: 'alphabetic'})
	const numbersFormId = randomstring.generate({length: 4, charset: 'numeric'})

	const formId = lettersFormId + numbersFormId




	const setInvoiceHandler = (data: InvoiceFormValues) => {
		const formatedDate = new Intl.DateTimeFormat('en-US').format(data.invoiceDate)
	}

	const setDraftHandler = () => {
		const data = getValues()
		const formatedDate = new Intl.DateTimeFormat('en-US').format(data.invoiceDate)
	}

	return (
		<form
			noValidate
			onSubmit={handleSubmit(setInvoiceHandler)}
			className='dark:form-scroll form-scroll-light light-scroll  h-full overflow-auto pr-5'
		>
			<BillFromForm control={control} error={errors} />
			<BillToForm control={control} error={errors} />
			<BasicInformation control={control} error={errors} />
			<ItemListForm control={control} error={errors} />
			<div className='absolute bottom-0 left-0 right-0 flex justify-between gap-2 rounded-2xl bg-lightGray px-3 py-6 sm:py-10 text-sm  text-white shadow-topShadow dark:bg-lightDark sm:px-10 lg:pl-40 lg:pr-10'>
				<div className='overflow-hidden rounded-3xl text-darkGray hover:bg-grayishWhite dark:bg-lightGray min-w-max '>
					<Button padding='sm:px-6' onClick={toggleForm}>
						Discard
					</Button>
				</div>
				<div className='inline-flex gap-5'>
					<div className='w-max overflow-hidden rounded-3xl bg-darkGray hover:bg-secondaryDark'>
						<Button padding='sm:px-6' onClick={setDraftHandler}>
							Save as Draft
						</Button>
					</div>
					<div className='w-max overflow-hidden rounded-3xl bg-primary hover:bg-secondary'>
						<SubmitButton padding='p-3' isSubmitting={isSubmitting}>
							Save & Send
						</SubmitButton>
					</div>
				</div>
			</div>
		</form>
	)
}
