'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

import { ContentWrapper } from '../ui/ContentWrapper'
import { Profile } from './Profile'
import { AnimatePresence } from '@/lib/motion'
import { GeneralInfo } from './GeneralInfo'
import { Account } from './Account'
import { LinkButton } from '../ui/LinkButton'
import { navigation } from '@/constants/navigation_paths'
import { GoBack } from '../ui/GoBack'

export const User = () => {
	const searchParams = useSearchParams()
	const isProfile = searchParams.get('settings') === 'profile'
	return (
		<ContentWrapper>
			<div className='w-max md:mt-0 '>
				<GoBack />
			</div>
			<div className='w-full rounded-lg p-3 dark:text-white md:inline-flex '>
				<div className='m-8 flex flex-col gap-5 md:ml-0 lg:m-8'>
					<Profile />
				</div>

				<div className='mt-4 flex flex-1 flex-col'>
					<div className='flex w-full justify-around'>
						<div className='w-1/3 xl:w-1/4'>
							<LinkButton isSelected={!isProfile} url={navigation.userProfile.path}>
								Profile
							</LinkButton>
						</div>
						<div className='w-1/3 xl:w-1/4'>
							<LinkButton isSelected={isProfile} url={navigation.userAccount.path}>
								Account
							</LinkButton>
						</div>
					</div>
					<div className='mt-5 flex-1 border-t-[1px]  border-dashed border-primary py-5 text-lg lg:px-10'>
						<AnimatePresence mode='wait'>
							{isProfile && <GeneralInfo key='GeneralInfo' />} {!isProfile && <Account key='Account' />}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</ContentWrapper>
	)
}
