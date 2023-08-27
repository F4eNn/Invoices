'use client'
import { Dispatch, SetStateAction, createContext } from 'react'

import { InvoiceData } from './FormCtx'
import { InvoiceDataProviderType } from './InvoiceProvider'
import { InvoiceFormValues } from './FormProviders'

type InvoiceCtxTypes = {
	filteredInvoiceData: InvoiceData[]
	getCurrentInvoice: (_id: InvoiceDataProviderType['formId']) => InvoiceDataProviderType | undefined
	updateSelectedInvoice: (
		_formId: InvoiceDataProviderType['formId'],
		_as: 'paid' | 'pending',
		_data?: InvoiceFormValues,
	) => Promise<void>
	deleteInvoice: (_formId: InvoiceDataProviderType['formId']) => Promise<void>
	setCheckedItems: Dispatch<SetStateAction<{ pending: boolean, paid: boolean, draft: boolean }>>
	checkedItems: { pending: boolean, paid: boolean, draft: boolean }
	numberOfInvoices: number
	fetching: boolean
}

const defaultValue: InvoiceCtxTypes = {
	filteredInvoiceData: [],
	getCurrentInvoice: (_id: InvoiceDataProviderType['formId']) => undefined,
	updateSelectedInvoice: async (
		_formId: InvoiceDataProviderType['formId'],
		_as: 'paid' | 'pending',
		_data?: InvoiceFormValues,
	) => {},
	deleteInvoice: async (_formId: InvoiceDataProviderType['formId']) => {},
	setCheckedItems: () => {},
	checkedItems: { pending: false, paid: false, draft: false },
	numberOfInvoices: 0,
	fetching: false
}

export const InvoiceCtx = createContext<InvoiceCtxTypes>(defaultValue)
