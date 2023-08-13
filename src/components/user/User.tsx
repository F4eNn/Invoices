import React from 'react'

import { ContentWrapper } from '../ui/ContentWrapper'
import { Profile } from './Profile'
import { AnimatePresence, motion } from '@/lib/motion'
import { shuffleAnimation } from '@/animations/animations'
import { useToggle } from '@/hooks/useToggle'
import { Button } from '../ui/Button'
import { useAuth } from '@/hooks/useAuth'

export const User = () => {
	const [isProfile, changeCard] = useToggle()
	const { user } = useAuth()
	return (
		<ContentWrapper>
			<div className='dark:text-white p-3 flex w-full rounded-lg    '>
				<div className='flex flex-col gap-5 m-8'>
					<Profile />
				</div>

				<div className='flex flex-col flex-1 mt-4'>
					<div className='w-full flex justify-around'>
						<div className='w-1/4'>
							<Button onClick={changeCard}>Profile</Button>
						</div>
						<div className='w-1/4'>
							<Button onClick={changeCard}>Account</Button>
						</div>
					</div>
					<div className='flex-1 py-5 px-10  border-t-[1px] border-dashed border-primary mt-5 text-lg'>
						<AnimatePresence mode='wait'>
							{isProfile && (
								<motion.div
									key={'updatePicture'}
									{...shuffleAnimation}>
									<div className='flex flex-col gap-5 w-1/2'>
										<h1 className='text-headingL'>Update Profile</h1>
										<button className='bg-primary p-3 rounded-lg'>Update</button>
									</div>
								</motion.div>
							)}
							{!isProfile && (
								<motion.div
									key={'Profile'}
									{...shuffleAnimation}
									className='flex flex-col gap-5'>
									<h1 className='text-headingL'>Details</h1>
									<p>Total Invoices: 27</p>
									<p>{user?.email}</p>
									<p>created at: {user?.created}</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</ContentWrapper>
	)
}
