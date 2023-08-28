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
import { notify } from '@/constants/notify'

export const InvoiceForm = () => {
	const { toggleForm, handleCollectionData, } = useForm()
	const { updateSelectedInvoice } = useInvoice()

	const { handleSubmit, control, formState, getValues, reset } = useFormContext<InvoiceFormValues>()
	const { errors, isSubmitting } = formState

	const lettersFormId = randomstring.generate({ length: 2, capitalization: 'uppercase', charset: 'alphabetic' })
	const numbersFormId = randomstring.generate({ length: 4, charset: 'numeric' })
	const formId = lettersFormId + numbersFormId

	const params = useSearchParams()
	const invoiceId = params.get('invoiceId')

	const setInvoiceHandler = async (data: InvoiceFormValues) => {
		if (invoiceId) {
			await updateSelectedInvoice(invoiceId, 'pending', data)
			reset()
			toggleForm()
			notify('Invoice updated')
			return
		}
		try {
			await handleCollectionData(data, CollectionName.Invoices, formId)
			toggleForm()
			notify('Invoice Created')
			reset()
		} catch (error) {
			console.error(`Failed add ${CollectionName.Invoices} to firestore:`, error)
		}
	}
	const setDraftHandler = async () => {
		const data = getValues()
		try {
			await handleCollectionData(data, CollectionName.Drafts, formId)
			notify(`Draft is created`)
			toggleForm()
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
				className={`absolute bottom-0 left-0 right-0 flex z-[99] ${
					invoiceId ? 'justify-end' : 'justify-between'
				} gap-2 rounded-2xl bg-lightGray px-3 py-6 text-sm text-white  shadow-topShadow dark:bg-lightDark sm:px-10 sm:py-10 lg:pl-40 lg:pr-10`}
			>
				<Button
					bg='bg-lightGray'
					bgHover='hover:bg-grayishWhite'
					textColor='text-darkGray'
					padding='sm:px-6'
					onClick={toggleForm}
				>
					{invoiceId ? 'Cancel' : 'Discard'}
				</Button>
				<div className='inline-flex gap-5'>
					{!invoiceId && (
						<Button bg='bg-darkGray' bgHover='hover:bg-secondaryDark' padding='sm:px-6' onClick={setDraftHandler}>
							{isSubmitting ? <PulseLoader color='#fff' size={10} /> : 'Save as Draft'}
						</Button>
					)}
					<SubmitButton
						bgHover='hover:bg-secondary'
						width='w-max'
						bg='bg-primary'
						rounded='rounded-[30px]'
						padding='p-3'
						isSubmitting={isSubmitting}
					>
						{invoiceId ? 'Save Changes' : 'Save & Send'}
					</SubmitButton>
				</div>
			</div>
		</form>
	)
}
