import { createContext } from 'react'

import { InvoiceData } from './FormCtx'
import { InvoiceDataProviderType } from './InvoiceProvider'
import { InvoiceFormValues } from './FormProviders'

type InvoiceCtxTypes = {
	invoiceData: InvoiceData[]
	getCurrentInvoice: (_id: InvoiceDataProviderType['formId']) => InvoiceDataProviderType | undefined
	updateSelectedInvoice: (
		_formId: InvoiceDataProviderType['formId'],
		_as: 'paid' | 'pending',
		_data?: InvoiceFormValues,
	) => Promise<void>
	deleteInvoice: (_formId: InvoiceDataProviderType['formId']) => Promise<void>
}

const defaultValue: InvoiceCtxTypes = {
	invoiceData: [],
	getCurrentInvoice: (_id: InvoiceDataProviderType['formId']) => undefined,
	updateSelectedInvoice: async (
		_formId: InvoiceDataProviderType['formId'],
		_as: 'paid' | 'pending',
		_data?: InvoiceFormValues,
	) => {},
	deleteInvoice: async (_formId: InvoiceDataProviderType['formId']) => {},
}

export const InvoiceCtx = createContext<InvoiceCtxTypes>(defaultValue)
