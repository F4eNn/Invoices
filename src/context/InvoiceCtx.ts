

import { createContext } from 'react'

type InvoiceCtxProps = {}

const defaultValues: InvoiceCtxProps = {}



export const InvoiceCtx = createContext<InvoiceCtxProps>(defaultValues)
