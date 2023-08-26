'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'

import { InvoiceCtx } from './InvoiceCtx'
import { useAuth } from '@/hooks/useAuth'
import { db } from '@/config/firebase'
import { InvoiceData } from './FormCtx'
import { InvoiceFormValues } from './FormProviders'

export type InvoiceDataProviderType = InvoiceData & {
	as: 'paid' | 'pending' | 'draft'
	totalPrice: number
	paymentDue: Date
	index: number
}

export const InvoiceProvider = ({ children }: { children: ReactNode }) => {
	const { user } = useAuth()
	const [invoiceData, setInvoiceData] = useState<InvoiceDataProviderType[]>([])
	const router = useRouter()

	useEffect(() => {
		if (!user) return
		const invoiceRef = doc(db, 'invoices', user.email)
		const subscribeInvoiceData = onSnapshot(invoiceRef, doc => {
			if (!doc.exists()) return
			const invoiceArr = doc.data().invoices

			const updatedInvoiceData = invoiceArr.map((invoice: InvoiceData, idx: number) => {
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
					index: idx,
				}
			})
			setInvoiceData(updatedInvoiceData)
		})
		return () => subscribeInvoiceData()
	}, [user])

	const getCurrentInvoice = (id: InvoiceDataProviderType['formId']) => {
		return invoiceData.find(invoice => invoice.formId === id)
	}

	const getData = async () => {
		if (!user) return
		const invoiceRef = doc(db, 'invoices', user!.email)
		const invoiceSnap = await getDoc(invoiceRef)

		if (!invoiceSnap.exists()) return
		const currentInvoice = invoiceSnap.data().invoices

		return currentInvoice
	}

	const updateSelectedInvoice = async (
		formId: InvoiceDataProviderType['formId'],
		as: 'pending' | 'paid',
		data?: InvoiceFormValues,
	) => {
		if (!user) return
		const invoiceRef = doc(db, 'invoices', user.email)

		const editingInvoice = getCurrentInvoice(formId) as InvoiceDataProviderType
		const invoiceIndex = editingInvoice.index

		const currentInvoice = await getData()

		const updateExistingInvoice = {
			...currentInvoice[invoiceIndex],
			...data,
			invoiceDate: editingInvoice.invoiceDate,
			as,
		}
		currentInvoice[invoiceIndex] = updateExistingInvoice
		await updateDoc(invoiceRef, { invoices: currentInvoice })
	}
	const deleteInvoice = async (formId: string) => {
		if (!user) return
		const invoiceRef = doc(db, 'invoices', user.email)

		const invoices = (await getData()) as InvoiceDataProviderType[]
		const editingInvoice = getCurrentInvoice(formId) as InvoiceDataProviderType

		const deleteField = invoices.filter(item => !(item.formId === editingInvoice.formId))
		updateDoc(invoiceRef, { invoices: deleteField })
		router.back()
	}

	const values = {
		invoiceData,
		getCurrentInvoice,
		updateSelectedInvoice,
		deleteInvoice,
	}
	return <InvoiceCtx.Provider value={values}>{children}</InvoiceCtx.Provider>
}
