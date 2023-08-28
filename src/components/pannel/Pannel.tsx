'use client'
import { useRef } from 'react'
import { Tooltip, IconButton } from '@mui/material'

import { useOutsideClick } from '@/hooks/useOutsideClick'
import { SwitchModeBtn } from './SwitchModeBtn'
import { Logo } from './Logo'
import { AnimatePresence, motion } from '@/lib/motion'
import { Menu } from './Menu'
import { Avatar } from '../ui/Avatar'
import { pulseAnimation } from '@/animations/animations'

export const Pannel = () => {
	const menuRef = useRef<HTMLElement>(null)
	const { isOpen, toggleState } = useOutsideClick(menuRef)
	return (
		<div className='relative z-[9999] h-24 w-24 '>
			<div className='fixed left-0  top-0 flex h-24 w-full  justify-between bg-secondaryDark lg:h-full lg:w-24 lg:flex-col lg:rounded-r-3xl'>
				<Logo />
				<div className='flex lg:flex-col '>
					<SwitchModeBtn />
					<div className='border-r-2 border-grayPurple lg:border-b-2' />
					<div className='relative flex items-center justify-center '>
						<Tooltip title='Account settings' placement='right'>
							<IconButton
								onClick={toggleState}
								className='flex h-full w-28 items-center justify-center lg:h-28 lg:w-full '
							>
								<Avatar />
							</IconButton>
						</Tooltip>
						<motion.span
							variants={pulseAnimation}
							initial='hidden'
							animate='visible'
							className='absolute right-1 top-5 rounded-2xl bg-secondary px-2 text-sm text-white '
						>
							New!
						</motion.span>
						<AnimatePresence>{isOpen && <Menu />}</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	)
}
