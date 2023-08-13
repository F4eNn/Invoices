import React from 'react'
import { Divider } from '@mui/material'
import Link from 'next/link'

import { UserIcon } from '../icons/User'
import { LogoutIcon } from '../icons/Logout'
import { SettingsIcon } from '../icons/Settings'
import { motion } from '@/lib/motion'
import { useAuth } from '@/hooks/useAuth'
import { menuAnimation } from '@/animations/animations'
import { navigation } from '@/navigation_paths'

interface MenuProps {
	isOpen: boolean
}

export const Menu = ({ isOpen }: MenuProps) => {
	const { logout, user } = useAuth()

	const logoutUser = async () => {
		await logout()
	}
	const userProfilePath = `${user?.name}${navigation.userProfile.path}`
	const userAccountPath = `${user?.name}${navigation.userAccount.path}`
	const menuValues = [
		[<UserIcon key={1} />, 'Profile', userProfilePath],
		[<SettingsIcon key={2} />, 'Account', userAccountPath],
	]

	return (
		<motion.menu
			variants={menuAnimation}
			initial='hidden'
			animate={isOpen ? 'visible' : 'hidden'}
			exit='exit'
			className='absolute  -left-[175px] w-[275px] lg:top-[-80px] lg:left-[110px] top-[100px] rounded-md p-1 gap-5 inline-block bg-slate-100  shadow-md z-50 '>
			{menuValues.map(([icon, title, url], index) => (
				<li key={index}>
					<Link
						href={url as string}
						className={`gap-3 w-full text-left  inline-flex items-center group p-2 hover:bg-primary hover:text-white rounded-md transition-color`}>
						{icon}
						<span className='text-xl font-light'>{title}</span>
					</Link>
				</li>
			))}
			<Divider className='text-black w-full' />
			<li>
				<button
					onClick={logoutUser}
					className={`gap-3 w-full text-left  inline-flex items-center group p-2 hover:bg-red hover:text-white rounded-md transition-color`}>
					<LogoutIcon />
					<span className='text-xl font-light'>Logout</span>
				</button>
			</li>
		</motion.menu>
	)
}
