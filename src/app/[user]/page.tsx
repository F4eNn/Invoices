'use client'
import React from 'react'

import { User } from '@/components/user/User'
import { Pannel } from '@/components/pannel/Pannel'

const UserPage = () => {
	return (
		<div className='h-full flex flex-col lg:flex-row  '>
			<Pannel />
			<User />
		</div>
	)
}

export default UserPage
