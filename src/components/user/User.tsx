import React from 'react'
import { useSearchParams } from 'next/navigation'

import { ContentWrapper } from '../ui/ContentWrapper'
import { Profile } from './Profile'
import { AnimatePresence } from '@/lib/motion'
import { GeneralInfo } from './GeneralInfo'
import { Account } from './Account'
import { LinkButton } from '../ui/LinkButton'
import { navigation } from '@/navigation_paths'

export const User = () => {
	const searchParams = useSearchParams()
	const isProfile = searchParams.get('settings') === 'profile'
	return (
		<ContentWrapper>
			<div className='dark:text-white p-3 flex w-full rounded-lg    '>
				<div className='flex flex-col gap-5 m-8'>
					<Profile />
				</div>

				<div className='flex flex-col flex-1 mt-4'>
					<div className='w-full flex justify-around'>
						<div className='w-1/4'>
							<LinkButton
								isSelected={!isProfile}
								url={navigation.userProfile.path}>
								Profile
							</LinkButton>
						</div>
						<div className='w-1/4'>
							<LinkButton
								isSelected={isProfile}
								url={navigation.userAccount.path}>
								Account
							</LinkButton>
						</div>
					</div>
					<div className='flex-1 py-5 px-10  border-t-[1px] border-dashed border-primary mt-5 text-lg'>
						<AnimatePresence mode='wait'>{isProfile ? <GeneralInfo /> : <Account />}</AnimatePresence>
					</div>
				</div>
			</div>
		</ContentWrapper>
	)
}
