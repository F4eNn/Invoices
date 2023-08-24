import { createContext } from 'react'


type InvoiceCtxTypes = {}

const defaultValue: InvoiceCtxTypes = {}

export const InvoiceCtx = createContext<InvoiceCtxTypes>(defaultValue)
