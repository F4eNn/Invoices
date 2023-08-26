import React from 'react'

import { useAuth } from '@/hooks/useAuth'
import { motion } from '@/lib/motion'
import { shuffleAnimation } from '@/animations/animations'
import { GeneralInfoForm } from './GeneralInfoForm'
import { useInvoice } from '@/hooks/useInvoice'

export const GeneralInfo = () => {
	const { user } = useAuth()
	const {numberOfInvoices} = useInvoice()
	const userProfile = [
		['Total Invoices:', numberOfInvoices],
		['Email:', user?.email],
		['created at:', user?.created],
	]

	return (
		<>
			<motion.div {...shuffleAnimation} className='flex flex-col md:flex-row md:items-start  md:justify-between'>
				<div className='flex flex-col gap-5'>
					<h1 className='text-headingL'>My Profile</h1>
					{userProfile.map(([title, data], index) => (
						<p key={index}>
							{title} <span className='text-secondary'>{data}</span>
						</p>
					))}
				</div>
				<GeneralInfoForm />
			</motion.div>
		</>
	)
}
