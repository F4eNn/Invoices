import React from 'react'
import { Divider } from '@mui/material'
import Link from 'next/link'

import { UserIcon } from '../icons/User'
import { LogoutIcon } from '../icons/Logout'
import { SettingsIcon } from '../icons/Settings'
import { motion } from '@/lib/motion'
import { useAuth } from '@/hooks/useAuth'
import { menuAnimation } from '@/animations/animations'
import { navigation } from '@/constants/navigation_paths'
import { notify } from '@/constants/notify'

export const Menu = () => {
	const { logout, user } = useAuth()

	const logoutUser = async () => {
		await logout()
		notify(`You're now disconnected`)
	}
	const userProfilePath = `${user?.name}${navigation.userProfile.path}`
	const userAccountPath = `${user?.name}${navigation.userAccount.path}`
	const menuValues = [
		[<UserIcon key={1} />, 'Profile', userProfilePath],
		[<SettingsIcon key={2} />, 'Account', userAccountPath],
	]

	return (
		<motion.menu
			{...menuAnimation}
			className='absolute  -left-[175px] top-[95px] z-50 inline-block w-[275px]  gap-5 rounded-md bg-slate-100 p-1 shadow-md   lg:left-[110px] lg:top-[-100px] '
		>
			<div className='absolute -top-1.5 right-9 -z-10 h-3  w-3 rotate-45 bg-slate-100 content-[""] lg:hidden' />
			{menuValues.map(([icon, title, url], index) => (
				<li key={index}>
					<Link
						href={url as string}
						className={`transition-color group inline-flex  w-full items-center gap-3 rounded-md p-2 text-left hover:bg-primary hover:text-white`}
					>
						{icon}
						<span className='text-xl font-light'>{title}</span>
					</Link>
				</li>
			))}
			<Divider className='w-full text-black' />
			<li>
				<button
					onClick={logoutUser}
					className={`transition-color group inline-flex  w-full items-center gap-3 rounded-md p-2 text-left hover:bg-red hover:text-white`}
				>
					<LogoutIcon />
					<span className='text-xl font-light'>Logout</span>
				</button>
			</li>
		</motion.menu>
	)
}
