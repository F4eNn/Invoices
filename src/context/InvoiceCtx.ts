

import { createContext } from 'react'

type InvoiceCtxProps = {
    toggleForm: () => void
    isOpenForm: boolean
}

const defaultValues: InvoiceCtxProps = {
    toggleForm: () => {},
    isOpenForm: false,
}



export const InvoiceCtx = createContext<InvoiceCtxProps>(defaultValues)
