import React, { ReactNode, useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'

import { InvoiceCtx } from './InvoiceCts'
import { useAuth } from '@/hooks/useAuth'
import { db } from '@/config/firebase'
import { InvoiceData } from './formCtx'

export type InvoiceDataProvider = InvoiceData & { as: 'paid' | 'pending' | 'draft'; totalPrice: number }

export const InvoiceProvider = ({ children }: { children: ReactNode }) => {
	const { user } = useAuth()
	const [invoiceData, setInvoiceData] = useState<InvoiceDataProvider[]>([])

	useEffect(() => {
		if (!user) return
		const invoiceRef = doc(db, 'invoices', user.email)
		const subscribeInvoiceData = onSnapshot(invoiceRef, doc => {
			if (!doc.exists()) return
			const invoiceArr = doc.data().invoices

			const updatedInvoiceData = invoiceArr.map((invoice: InvoiceData) => {
				const totalPrice = invoice.items.reduce((acc, item) => {
					const totalItemPrice = item.price! * item.quantity!
					return acc + totalItemPrice
				}, 0)

				return {
					...invoice,
					totalPrice,
				}
			})
			setInvoiceData(updatedInvoiceData)
		})
		return () => subscribeInvoiceData()
	}, [])
	const values = {
		invoiceData,
	}
	return <InvoiceCtx.Provider value={values}>{children}</InvoiceCtx.Provider>
}
