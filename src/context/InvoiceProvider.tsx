import React, { ReactNode } from 'react'

import { InvoiceCtx } from './InvoiceCtx'

export const InvoiceProvider = ({children}: {children: ReactNode}) => {





    const invoiceValues = {}


  return <InvoiceCtx.Provider value={invoiceValues}>{children}</InvoiceCtx.Provider>
}
