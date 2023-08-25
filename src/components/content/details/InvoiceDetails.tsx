import { useSearchParams } from 'next/navigation'

import { useInvoice } from '@/hooks/useInvoice'
import { useForm } from '@/hooks/useForm'
import { ContentWrapper } from '@/components/ui/ContentWrapper'
import { GoBack } from './GoBack'
import { ControlPannelDetails } from './ControlPannel'
import { DetailsBody } from './DetailsBody'

export const InvoiceDetails = () => {
	const { getCurrentInvoice } = useInvoice()
	const { toggleForm } = useForm()

	const params = useSearchParams()
	const invoiceId = params.get('invoiceId')

	if (!invoiceId) return

	const invoice = getCurrentInvoice(invoiceId)

	const handleEditInvoice = () => {
		toggleForm()
	}
	if(!invoice) return
	return (
		<div className='flex flex-1 flex-col '>
			<ContentWrapper mt='lg:mt-10'>
				<GoBack />
				<ControlPannelDetails as={invoice.as} />
				<DetailsBody {...invoice}/>
			</ContentWrapper>
		</div>
	)
}
