import React, { type ReactNode } from 'react'

import { InvoiceCtx } from './InvoiceCtx'
import { useToggle } from '@/hooks/useToggle'

export const InvoiceProvider = ({ children }: { children: ReactNode }) => {
	const [isOpenForm, toggleForm] = useToggle()
	const invoiceValues = {
		toggleForm,
		isOpenForm,
	}

	return <InvoiceCtx.Provider value={invoiceValues}>{children}</InvoiceCtx.Provider>
}
