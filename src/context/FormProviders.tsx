'use client'
import React, { type ReactNode } from 'react'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { FormProvider as ReactFormProvider, useForm } from 'react-hook-form'

import { CollectionName, FormCtx, InvoiceData } from './FormCtx'
import { useToggle } from '@/hooks/useToggle'
import { db } from '@/config/firebase'
import { useAuth } from '@/hooks/useAuth'

export type InvoiceFormValues = {
	sender: {
		streetAddress: string
		city: string
		postCode: string
		country: string
	}
	receiver: {
		clientName: string
		clientEmail: string
		clientStreetAddress: string
		clientCity: string
		clientPostCode: string
		clientCountry: string
	}
	invoiceDate: Date | string
	paymentTerms: string
	projectDescription: string
	items: { name: string; quantity: number | undefined; price: number | undefined }[]
}

export const MenageFormProvider = ({ children }: { children: ReactNode }) => {
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

export const FormProvider = ({ children }: { children: ReactNode }) => {
	const methods = useForm<InvoiceFormValues>({
		defaultValues: {
			sender: {
				city: '',
				country: '',
				postCode: '',
				streetAddress: '',
			},
			receiver: {
				clientStreetAddress: '',
				clientName: '',
				clientCity: '',
				clientCountry: '',
				clientEmail: '',
				clientPostCode: '',
			},
			invoiceDate: new Date(),
			paymentTerms: '30',
			projectDescription: '',
			items: [
				{
					name: '',
					price: 0,
					quantity: 0,
				},
			],
		},
	})

	return <ReactFormProvider {...methods}>{children}</ReactFormProvider>
}
