import React, { ReactNode, useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'

import { InvoiceCtx } from './InvoiceCtx'
import { useAuth } from '@/hooks/useAuth'
import { db } from '@/config/firebase'
import { InvoiceData } from './FormCtx'

export type InvoiceDataProviderType = InvoiceData & {
	as: 'paid' | 'pending' | 'draft'
	totalPrice: number
	paymentDue: Date
}

export const InvoiceProvider = ({ children }: { children: ReactNode }) => {
	const { user } = useAuth()
	const [invoiceData, setInvoiceData] = useState<InvoiceDataProviderType[]>([])

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
				const newDate = new Date(invoice.invoiceDate)
				const paymentTime = newDate.setDate(newDate.getDate() + parseInt(invoice.paymentTerms))
				const paymentDue = new Date(paymentTime)
				return {
					...invoice,
					totalPrice,
					paymentDue,
				}
			})
			setInvoiceData(updatedInvoiceData)
		})
		return () => subscribeInvoiceData()
	}, [user])

	const getCurrentInvoice = (id: InvoiceDataProviderType['formId']) => {
		return invoiceData.find(invoice => invoice.formId === id)
	}

	const values = {
		invoiceData,
		getCurrentInvoice,
	}
	return <InvoiceCtx.Provider value={values}>{children}</InvoiceCtx.Provider>
}
