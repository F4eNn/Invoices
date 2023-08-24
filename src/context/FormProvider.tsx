import React, { type ReactNode } from 'react'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

import { CollectionName, FormCtx, InvoiceData } from './formCtx'
import { useToggle } from '@/hooks/useToggle'
import { db } from '@/config/firebase'
import { useAuth } from '@/hooks/useAuth'
import { InvoiceFormValues } from '@/components/content/form/InvoiceForm'

export const FormProvider = ({ children }: { children: ReactNode }) => {
	const [isOpenForm, toggleForm] = useToggle()
	const { user } = useAuth()

	const handleAddInvoice = async (formData: InvoiceData) => {
		if (!user) return
		const InvoiceRef = doc(db, 'invoices', user.email)
		try {
			const InvoiceSnap = await getDoc(InvoiceRef)

			if (!InvoiceSnap.exists()) {
				await setDoc(InvoiceRef, { invoices: [{ ...formData }] })
				return
			}
			const existingInvoices = InvoiceSnap.data().invoices
			const mergeInvoices = [...existingInvoices, formData]

			await updateDoc(InvoiceRef, { invoices: mergeInvoices })
		} catch (error) {
			console.error(`Failed set invoices:`, error)
		}
	}

	const handleCollectionData = async (data: InvoiceFormValues, collectionName: CollectionName, formId: string) => {
		try {
			const formatedDate = new Intl.DateTimeFormat('en-US').format(data.invoiceDate as Date)
			const updatedData = {
				...data,
				invoiceDate: formatedDate,
				formId,
				as: collectionName === 'invoices' ? 'pending' : 'draft',
			}
			handleAddInvoice(updatedData)
		} catch (error) {
			console.error(error)
		}
	}

	const invoiceValues = {
		toggleForm,
		handleAddInvoice,
		handleCollectionData,
		isOpenForm,
	}

	return <FormCtx.Provider value={invoiceValues}>{children}</FormCtx.Provider>
}
