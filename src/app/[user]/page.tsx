'use client'
import React from 'react'

import { User } from '@/components/user/User'
import { Pannel } from '@/components/pannel/Pannel'

const UserPage = () => {
	return (
		<main className='h-full flex flex-col lg:flex-row overflowX-hidden'>
			<Pannel />
			<User />
		</main>
	)
}

export default UserPage
