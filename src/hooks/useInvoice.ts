'use client'
import { useContext } from 'react'

import { InvoiceCtx } from '@/context/InvoiceCtx'

export const useInvoice = () => useContext(InvoiceCtx)
