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
	invoiceDate: Date | string
	paymentTerms: string
	projectDescription: string
	items: { name: string; quantity: number | undefined; price: number | undefined }[]
}

export const InvoiceForm = () => {
	const { toggleForm,handleSetDraft,handleSetInvoice } = useInvoice()

	const { handleSubmit, control, formState, getValues, watch, reset } = useForm<InvoiceFormValues>({
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

	const lettersFormId = randomstring.generate({ length: 2, capitalization: 'uppercase', charset: 'alphabetic' })
	const numbersFormId = randomstring.generate({ length: 4, charset: 'numeric' })

	const formId = lettersFormId + numbersFormId

	const setInvoiceHandler = async (data: InvoiceFormValues) => {
		const formatedDate = new Intl.DateTimeFormat('en-US').format(data.invoiceDate as Date)

		const updatedData = {
			...data,
			invoiceDate: formatedDate ,
			formId,
		}
		await handleSetInvoice(updatedData)
		reset()
	}

	const setDraftHandler = async () => {
		const data = getValues()
		const formatedDate = new Intl.DateTimeFormat('en-US').format(data.invoiceDate as Date) 

		const updatedData = {
			...data,
			invoiceDate: formatedDate ,
			formId,
		}
		await handleSetDraft(updatedData)
		reset()
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
			<ItemListForm control={control} error={errors} watch={watch} />
			<div className='absolute bottom-0 left-0 right-0 flex justify-between gap-2 rounded-2xl bg-lightGray px-3 py-6 text-sm text-white  shadow-topShadow dark:bg-lightDark sm:px-10 sm:py-10 lg:pl-40 lg:pr-10'>
				<div className='min-w-max overflow-hidden rounded-3xl text-darkGray hover:bg-grayishWhite dark:bg-lightGray '>
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
