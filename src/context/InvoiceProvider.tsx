import React, { ReactNode } from 'react'

import { InvoiceCtx } from './InvoiceCts'

export const InvoiceProvider = ({ children }: { children: ReactNode }) => {


	
	const values = {}
	return <InvoiceCtx.Provider value={values}>{children}</InvoiceCtx.Provider>
}
