import React from 'react'
import { useFormContext } from 'react-hook-form'
import randomstring from 'randomstring'
import PulseLoader from 'react-spinners/PulseLoader'
import { useSearchParams } from 'next/navigation'

import { BillFromForm } from './BillFrom'
import { BillToForm } from './BillTo'
import { ItemListForm } from './ItemList'
import { SubmitButton } from '@/components/ui/SubmitButton'
import { Button } from '@/components/ui/Button'
import { BasicInformation } from './BasicInformation'
import { CollectionName } from '@/context/FormCtx'
import { useForm } from '@/hooks/useForm'
import { useInvoice } from '@/hooks/useInvoice'
import { type InvoiceFormValues } from '@/context/FormProviders'

export const InvoiceForm = () => {
	const { toggleForm, handleCollectionData } = useForm()
	const { updateSelectedInvoice } = useInvoice()

	const { handleSubmit, control, formState, getValues, reset } = useFormContext<InvoiceFormValues>()
	const { errors, isSubmitting } = formState

	const lettersFormId = randomstring.generate({ length: 2, capitalization: 'uppercase', charset: 'alphabetic' })
	const numbersFormId = randomstring.generate({ length: 4, charset: 'numeric' })
	const formId = lettersFormId + numbersFormId

	const params = useSearchParams()
	const invoiceId = params.get('invoiceId')
	
	const setInvoiceHandler = async (data: InvoiceFormValues) => {
		if (invoiceId ) {
			await updateSelectedInvoice( invoiceId, 'pending', data,)
			return
		}
		try {
			await handleCollectionData(data, CollectionName.Invoices, formId)
			reset()
		} catch (error) {
			console.error(`Failed add ${CollectionName.Invoices} to firestore:`, error)
		}
	}
	const setDraftHandler = async () => {
		const data = getValues()
		try {
			await handleCollectionData(data, CollectionName.Drafts, formId)
			reset()
		} catch (error) {
			console.error(`Failed add ${CollectionName.Drafts} to firestore:`, error)
		}
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
			<div
				className={`absolute bottom-0 left-0 right-0 flex ${
					invoiceId ? 'justify-end' : 'justify-between'
				} gap-2 rounded-2xl bg-lightGray px-3 py-6 text-sm text-white  shadow-topShadow dark:bg-lightDark sm:px-10 sm:py-10 lg:pl-40 lg:pr-10`}
			>
				<div className='min-w-max overflow-hidden rounded-3xl text-darkGray hover:bg-grayishWhite dark:bg-lightGray '>
					<Button padding='sm:px-6' onClick={toggleForm}>
						{invoiceId ? 'Cancel' : 'Discard'}
					</Button>
				</div>
				<div className='inline-flex gap-5'>
					{!invoiceId && (
						<div className='w-max overflow-hidden rounded-3xl bg-darkGray hover:bg-secondaryDark'>
							<Button padding='sm:px-6' onClick={setDraftHandler}>
								{isSubmitting ? <PulseLoader color='#fff' size={10} /> : 'Save as Draft'}
							</Button>
						</div>
					)}
					<div className='w-max overflow-hidden rounded-3xl bg-primary hover:bg-secondary'>
						<SubmitButton padding='p-3' isSubmitting={isSubmitting}>
							{invoiceId ? 'Save Changes' : 'Save & Send'}
						</SubmitButton>
					</div>
				</div>
			</div>
		</form>
	)
}
