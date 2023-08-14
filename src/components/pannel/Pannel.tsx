import { useRef } from 'react'
import { Tooltip, IconButton } from '@mui/material'

import { useOutsideClick } from '@/hooks/useOutsideClick'
import { SwitchModeBtn } from './SwitchModeBtn'
import { Logo } from './Logo'
import { AnimatePresence } from '@/lib/motion'
import { Menu } from './Menu'
import { Avatar } from '../ui/Avatar'

export const Pannel = () => {
	const menuRef = useRef<HTMLElement>(null)
	const { isOpen, toggleState } = useOutsideClick(menuRef)
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
							className='w-28 h-full flex justify-center items-center lg:w-full lg:h-28 '>
							<Avatar />
						</IconButton>
					</Tooltip>
					<span className='absolute bg-secondary text-white rounded-2xl px-2 text-sm right-1 top-5 '>New!</span>
					<AnimatePresence>{isOpen && <Menu />}</AnimatePresence>
				</div>
			</div>
		</div>
	)
}
