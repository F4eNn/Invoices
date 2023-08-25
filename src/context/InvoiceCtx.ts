import { createContext } from 'react'

import { InvoiceData } from './FormCtx'
import { InvoiceDataProvider } from './InvoiceProvider'

type InvoiceCtxTypes = {
	invoiceData: InvoiceData[]
	getCurrentInvoice: (_id: InvoiceDataProvider['formId']) => InvoiceDataProvider | undefined
}

const defaultValue: InvoiceCtxTypes = {
	invoiceData: [],
	getCurrentInvoice: (_id: InvoiceDataProvider['formId']) => undefined,
}

export const InvoiceCtx = createContext<InvoiceCtxTypes>(defaultValue)
