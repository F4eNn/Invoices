import { createContext } from 'react'

import { InvoiceData } from './formCtx'


type InvoiceCtxTypes = {
    invoiceData: InvoiceData[] 
}

const defaultValue: InvoiceCtxTypes = {
    invoiceData: []
}

export const InvoiceCtx = createContext<InvoiceCtxTypes>(defaultValue)
