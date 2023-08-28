'use client'
import React from 'react'

import { User } from '@/components/user/User'
import { Pannel } from '@/components/pannel/Pannel'
import { motion } from '@/lib/motion'
import { pageTransition } from '@/animations/animations'

const UserPage = () => {
	return (
		<motion.div {...pageTransition} className='flex min-h-screen flex-col lg:flex-row  '>
			<Pannel />
			<User />
		</motion.div>
	)
}

export default UserPage
