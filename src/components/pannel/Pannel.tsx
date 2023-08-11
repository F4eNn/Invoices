import { useRef } from 'react'
import { Avatar, Tooltip, IconButton, Divider } from '@mui/material'

import { SwitchModeBtn } from './SwitchModeBtn'
import { Logo } from './Logo'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { motion } from '@/lib/motion'
import { UserIcon } from '../icons/User'
import { LogoutIcon } from '../icons/Logout'
import { SettingsIcon } from '../icons/Settings'
import { useAuth } from '@/hooks/useAuth'

export const Pannel = () => {
	const menuRef = useRef<HTMLElement>(null)
	const { isOpen, toggleState } = useOutsideClick(menuRef)

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
	const { logout } = useAuth()
	const logoutUser = async () => {
		await logout()
	}
	return (
		<div className='h-24 flex  justify-between bg-secondaryDark w-full lg:rounded-r-3xl  lg:h-full lg:w-24 lg:flex-col lg:left-0'>
			<Logo />
			<div className='flex lg:flex-col '>
				<SwitchModeBtn />
				<div className='border-r-2 lg:border-b-2 border-grayPurple' />
				<div className='relative flex justify-center items-center '>
					<Tooltip
						title='Account settings'
						placement='right'>
						<IconButton
							onClick={toggleState}
							className='w-28 flex justify-center items-center lg:w-auto lg:h-28 '>
							<Avatar
								src='./s'
								alt='Mateusz'
								className='bg-secondary w-12 h-12'
							/>
						</IconButton>
					</Tooltip>
					{isOpen && (
						<motion.menu className='absolute  -left-[175px] w-[275px] lg:top-[-80px] lg:left-[110px] top-[100px] rounded-md p-1 gap-5 inline-block bg-slate-100  shadow-md z-50 '>
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
					)}
				</div>
			</div>
		</div>
	)
}
