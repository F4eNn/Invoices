import React, { type ReactNode } from 'react'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

import { InvoiceCtx, InvoiceData } from './InvoiceCtx'
import { useToggle } from '@/hooks/useToggle'
import { db } from '@/config/firebase'
import { useAuth } from '@/hooks/useAuth'

export const InvoiceProvider = ({ children }: { children: ReactNode }) => {
	const [isOpenForm, toggleForm] = useToggle()
	const { user } = useAuth()
	
	const handleSetDraft = async (formData: InvoiceData) => {
		if (!user) return
		const draftRef = doc(db, 'drafts', user.email)
		try {
			const draftSnap = await getDoc(draftRef)

			if (!draftSnap.exists()) {
				await setDoc(draftRef, { draft: [{...formData}] })
				return
			}
			const existingDrafts = draftSnap.data().draft
			const mergeDrafts = [...existingDrafts, formData]

			await updateDoc(draftRef, { draft: mergeDrafts })

		} catch (error) {
			console.error('Failed set draft:', error)
		}
	}

	const handleSetInvoice = async (formData: InvoiceData) => {
		if(!user) return

		const invoiceRef = doc(db, 'invoices', user.email)

		try {
				const invoiceSnap = await getDoc(invoiceRef)

				if(!invoiceSnap.exists()){
					setDoc(invoiceRef, {invoice: [{...formData}]})
					return
				}

				const existingInvoices = invoiceSnap.data().invoice
				const mergeInvoices = [...existingInvoices, formData]

				await updateDoc(invoiceRef, {invoice : mergeInvoices})

		} catch (error) {
			console.error('Failed set invoice:', error)
		}
	}


	const invoiceValues = {
		toggleForm,
		handleSetDraft,
		handleSetInvoice,
		isOpenForm,
	}

	return <InvoiceCtx.Provider value={invoiceValues}>{children}</InvoiceCtx.Provider>
}
