import { Avatar, Button } from '@mui/material'

import { SwitchModeBtn } from './SwitchModeBtn'
import { Logo } from './Logo'

export const Pannel = () => {

	return (
		<div className='h-24 flex  justify-between bg-secondaryDark w-full lg:rounded-r-3xl lg:overflow-hidden lg:h-full lg:w-24 lg:flex-col lg:left-0'>
			<Logo />
			<div className='flex lg:flex-col '>
				<SwitchModeBtn />
				<div className='border-r-2 lg:border-b-2 border-grayPurple' />
				<Button className='w-28 lg:w-auto lg:h-28 flex justify-center items-center'>
					<Avatar
						src='./s'
						alt='Mateusz'
						className='bg-secondary w-12 h-12'
					/>
				</Button>
			</div>
		</div>
	)
}
