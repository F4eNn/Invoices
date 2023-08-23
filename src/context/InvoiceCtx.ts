import { createContext } from 'react'

import { InvoiceFormValues } from '@/components/content/form/InvoiceForm'

export type InvoiceData = InvoiceFormValues & { formId: string }

export enum CollectionName {
	Drafts = 'drafts',
	Invoices = 'invoices',
}

type InvoiceCtxProps = {
	toggleForm: () => void
	handleAddInvoice: (_data: InvoiceData, _collectionName: CollectionName) => Promise<void>
    handleCollectionData: (_data: InvoiceFormValues, _collectionName: CollectionName, _formId: string) => void
	isOpenForm: boolean
}

const defaultValues: InvoiceCtxProps = {
	toggleForm: () => {},
	handleAddInvoice: async (_data: InvoiceData, _collectionName: CollectionName) => {},
    handleCollectionData: (_data: InvoiceFormValues, _collectionName: CollectionName, _formId: string) => {},
	isOpenForm: false,
}

export const InvoiceCtx = createContext<InvoiceCtxProps>(defaultValues)
