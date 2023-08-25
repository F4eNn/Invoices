import { useSearchParams } from 'next/navigation'

import { useInvoice } from '@/hooks/useInvoice'

export const InvoiceDetails = () => {
	const { getCurrentInvoice } = useInvoice()

	const params = useSearchParams()
	const invoiceId = params.get('invoiceId')

	if (!invoiceId) return

	const invoice = getCurrentInvoice(invoiceId)
	return <div>InvoiceDetails</div>
}
