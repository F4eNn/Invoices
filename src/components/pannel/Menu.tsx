import React from 'react'
import { Divider } from '@mui/material'

import { UserIcon } from '../icons/User'
import { LogoutIcon } from '../icons/Logout'
import { SettingsIcon } from '../icons/Settings'
import { motion } from '@/lib/motion'
import { useAuth } from '@/hooks/useAuth'
import { menuAnimation } from '@/animations/animations'

const menuValues = [
	[<UserIcon key={1} />, 'Profile'],
	[<SettingsIcon key={2} />, 'Account'],
	[
		<Divider
			className='text-black w-full'
			key={3}>
			or
		</Divider>,
	],
	[<LogoutIcon key={4} />, 'Log out'],
]

interface MenuProps {
	isOpen: boolean
}

export const Menu = ({ isOpen }: MenuProps) => {
	const { logout } = useAuth()

	const logoutUser = async () => {
		await logout()
	}

	return (
		<motion.menu
			variants={menuAnimation}
			initial='hidden'
			animate={isOpen ? 'visible' : 'hidden'}
			exit='exit'
			className='absolute  -left-[175px] w-[275px] lg:top-[-80px] lg:left-[110px] top-[100px] rounded-md p-1 gap-5 inline-block bg-slate-100  shadow-md z-50 '>
			{menuValues.map(([icon, title], index) => (
				<li key={index}>
					{index === 2 ? (
						<div>{icon}</div>
					) : (
						<button
							
							onClick={index === 3 ? logoutUser : undefined}
							className={`gap-3 w-full text-left  inline-flex items-center group p-2 hover:bg-primary hover:text-white rounded-md transition-colors  ${
								index === 3 && 'hover:bg-red'
							}`}>
							{icon}
							<span className='text-xl font-light'>{title}</span>
						</button>
					)}
				</li>
			))}
		</motion.menu>
	)
}
