import React, { type ReactNode } from 'react'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

import { CollectionName, InvoiceCtx, InvoiceData } from './InvoiceCtx'
import { useToggle } from '@/hooks/useToggle'
import { db } from '@/config/firebase'
import { useAuth } from '@/hooks/useAuth'
import { InvoiceFormValues } from '@/components/content/form/InvoiceForm'



export const InvoiceProvider = ({ children }: { children: ReactNode }) => {
	const [isOpenForm, toggleForm] = useToggle()
	const { user } = useAuth()
	
	const handleAddInvoice = async (formData: InvoiceData, collectionName: CollectionName) => {
		if (!user) return
		const InvoiceRef = doc(db, collectionName, user.email)
		try {
			const InvoiceSnap = await getDoc(InvoiceRef)

			if (!InvoiceSnap.exists()) {
				await setDoc(InvoiceRef, { [collectionName]: [{...formData}] })
				return
			}
			const existingInvoices = InvoiceSnap.data()[collectionName]
			const mergeInvoices = [...existingInvoices, formData]

			await updateDoc(InvoiceRef, { [collectionName]: mergeInvoices })

		} catch (error) {
			console.error(`Failed set ${collectionName}:`, error)
		}
	}

	const handleCollectionData = (data: InvoiceFormValues, collectionName: CollectionName, formId: string) => {
		const formatedDate = new Intl.DateTimeFormat('en-US').format(data.invoiceDate as Date)
		const updatedData = {
			...data,
			invoiceDate: formatedDate,
			formId,
		}
		 handleAddInvoice(updatedData, collectionName)
	}
	const invoiceValues = {
		toggleForm,
		handleAddInvoice,
		handleCollectionData,
		isOpenForm,
	}

	return <InvoiceCtx.Provider value={invoiceValues}>{children}</InvoiceCtx.Provider>
}
