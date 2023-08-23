import { createContext } from 'react'

import { InvoiceFormValues } from '@/components/content/form/InvoiceForm'

export type InvoiceData = InvoiceFormValues & { formId: string }

type InvoiceCtxProps = {
	toggleForm: () => void
	handleSetDraft: (_data: InvoiceData) => Promise<void>
	isOpenForm: boolean
}

const defaultValues: InvoiceCtxProps = {
	toggleForm: () => {},
	handleSetDraft: async (_data: InvoiceData) => {},
	isOpenForm: false,
}

export const InvoiceCtx = createContext<InvoiceCtxProps>(defaultValues)
