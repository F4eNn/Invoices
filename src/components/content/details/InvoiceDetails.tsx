'use client'
import { useSearchParams } from 'next/navigation'
import { useFormContext } from 'react-hook-form'

import { useInvoice } from '@/hooks/useInvoice'
import { useForm } from '@/hooks/useForm'
import { ContentWrapper } from '@/components/ui/ContentWrapper'
import { GoBack } from '../../ui/GoBack'
import { ControlPannelDetails } from './ControlPannel'
import { DetailsBody } from './DetailsBody'
import { type InvoiceFormValues } from '@/context/FormProviders'
import { type InvoiceDataProviderType } from '@/context/InvoiceProvider'

export const InvoiceDetails = () => {
	const { getCurrentInvoice } = useInvoice()
	const { toggleForm } = useForm()
	const { reset } = useFormContext<InvoiceFormValues>()

	const params = useSearchParams()
	const invoiceId = params.get('invoiceId')

	if (!invoiceId) return

	const invoice = getCurrentInvoice(invoiceId) as InvoiceDataProviderType

	const handleEditInvoice = () => {
		toggleForm()
		const formatDate = new Date(invoice.invoiceDate)
		reset({
			...invoice,
			invoiceDate: formatDate,
		})
	}
	if (!invoice) return
	return (
		<div className='flex flex-1 flex-col '>
			<ContentWrapper mt='lg:mt-10'>
				<GoBack />
				<ControlPannelDetails as={invoice.as} onEdit={handleEditInvoice} />
				<DetailsBody {...invoice} />
			</ContentWrapper>
		</div>
	)
}
