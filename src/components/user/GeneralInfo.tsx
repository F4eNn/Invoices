import React from 'react'

import { useAuth } from '@/hooks/useAuth'
import { motion } from '@/lib/motion'
import { shuffleAnimation } from '@/animations/animations'

export const GeneralInfo = () => {
	const { user } = useAuth()

	const userProfile = [
		['Total Invoices:', 27],
		['Email:', user?.email],
		['created at:', user?.created],
	]
	return (
		<>
			<motion.div
				key={'Profile'}
				{...shuffleAnimation}
				className='flex flex-col gap-5'>
				<h1 className='text-headingL'>My Profile</h1>
				{userProfile.map(([title, data], index) => (
					<p key={index}>
						{title} <span className='text-secondary'>{data}</span>
					</p>
				))}
			</motion.div>
		</>
	)
}