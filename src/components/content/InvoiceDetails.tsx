import { useSearchParams } from 'next/navigation'

import { useInvoice } from '@/hooks/useInvoice'
import { useForm } from '@/hooks/useForm'

export const InvoiceDetails = () => {
	const { getCurrentInvoice } = useInvoice()
	const {toggleForm} = useForm()

	const params = useSearchParams()
	const invoiceId = params.get('invoiceId')

	if (!invoiceId) return

	const invoice = getCurrentInvoice(invoiceId)

	const handleEditInvoice = () =>{
		toggleForm()
	}
	return (
		<div>
			<button onClick={handleEditInvoice} className='bg-lightGreen text-whie p-3'>edit</button>
		</div>
	)
}
