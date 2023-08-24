import { useContext } from 'react'

import { FormCtx } from '@/context/formCtx'

export const useInvoiceForm = () => useContext(FormCtx)
