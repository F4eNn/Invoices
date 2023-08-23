import React, { type ReactNode } from 'react'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

import { InvoiceCtx, InvoiceData } from './InvoiceCtx'
import { useToggle } from '@/hooks/useToggle'
import { db } from '@/config/firebase'
import { useAuth } from '@/hooks/useAuth'

export const InvoiceProvider = ({ children }: { children: ReactNode }) => {
	const [isOpenForm, toggleForm] = useToggle()
	const { user } = useAuth()

	const handleSetDraft = async (data: InvoiceData) => {
		if (!user) return
		
		const draftRef = doc(db, 'drafts', user.email)

		try {
			const draftSnap = await getDoc(draftRef)

			if (!draftSnap.exists()) {
				await setDoc(draftRef, { draft: [{...data}] })
				return
			}
			const existingData = draftSnap.data().draft
			const mergeArr = [...existingData, data]

			await updateDoc(draftRef, { draft: mergeArr })

		} catch (error) {
			console.error('Set draft failed:', error)
		}
	}

	const invoiceValues = {
		toggleForm,
		handleSetDraft,
		isOpenForm,
	}

	return <InvoiceCtx.Provider value={invoiceValues}>{children}</InvoiceCtx.Provider>
}
