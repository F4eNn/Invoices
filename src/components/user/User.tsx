'use client'
import React, { useState } from 'react'
import { Avatar, IconButton } from '@mui/material'
import { IoCamera } from 'react-icons/io5'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { ContentWrapper } from '../ui/ContentWrapper'
import { Button } from '../ui/Button'
import { AnimatePresence, motion } from '@/lib/motion'
import { shuffleAnimation } from '@/animations/animations'
import { storage } from '@/config/firebase'

export const User = () => {
	const [imageUpload, setUrl] = useState<File>()
	const [profile, setProfile] = useState('')

	const imageRef = ref(storage, `profiles/mateusz4k@outlook.com`)

	const saveImage = async () => {
		if (imageUpload == null) return
		try {
			await uploadBytes(imageRef, imageUpload)
			await getDownloadURL(imageRef).then(url => setProfile(url))
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<ContentWrapper>
			<div className='dark:text-white p-3 flex w-full rounded-lg    '>
				<div className='flex flex-col gap-5 m-8'>
					<div className='relative'>
						<Avatar
							sizes='lg'
							src={profile}
							alt='M'
							className='!bg-primary w-[175px] h-[175px] !text-7xl'
						/>
						<IconButton
							className='absolute -bottom-5 right-1'
							component='label'
							aria-label='upload profile picture'>
							<input
								hidden
								accept='image/*'
								type='file'
								onChange={e => setUrl(e.target.files![0])}
							/>
							<div className=' text-primaryDark dark:text-lightGray'>
								<IoCamera size='2.2em' />
							</div>
						</IconButton>
					</div>
					<button
						type='submit'
						className='bg-primary p-2 rounded-lg text-white mt-5 mx-auto'
						onClick={saveImage}>
						Save image
					</button>
					<p className='text-center text-2xl'>Mateusz</p>
				</div>

				<div className='flex flex-col flex-1 mt-4'>
					<div className='w-full flex justify-around'>
						<div className='w-1/4'>
							<Button
								bg='!bg-primary'
								bgHover='hover:!bg-secondary'>
								Profile
							</Button>
						</div>
						<div className='w-1/4'>
							<Button
								bg='!bg-primary'
								bgHover='hover:!bg-secondary'>
								Account
							</Button>
						</div>
					</div>
					<div className='flex-1 py-5 px-10  border-t-[1px] border-dashed border-primary mt-5 text-lg    '>
						{/* <AnimatePresence mode='wait'>
							{isOpen && (
								<motion.div
									key={'updatePicture'}
									{...shuffleAnimation}>
									<div className='flex flex-col gap-5 w-1/2'>
										<h1 className='text-headingL'>Update Profile</h1>
										<button className='bg-primary p-3 rounded-lg'>Update</button>
									</div>
								</motion.div>
							)}
							{!isOpen && (
								<motion.div
									key={'Profile'}
									{...shuffleAnimation}
									className='flex flex-col gap-5'>
									<h1 className='text-headingL'>Details</h1>
									<p>mateusz4k@outlook.com</p>
									<p>created at: 08.23.2023</p>
									<p>Total Invoices: 27</p>
								</motion.div>
							)}
						</AnimatePresence> */}
					</div>
				</div>
			</div>
		</ContentWrapper>
	)
}
