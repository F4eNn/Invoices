import { useContext } from 'react'

import { InvoiceCtx } from '@/context/InvoiceCts'

export const useInvoice = () => useContext(InvoiceCtx)
