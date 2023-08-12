'use client'
import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { IoCamera } from 'react-icons/io5'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { useAuth } from '@/hooks/useAuth'
import { storage } from '@/config/firebase'

export const Profile = () => {
	const [imageUpload, setUrl] = useState<File>()
	const [profile, setProfile] = useState('')

	const { getUserInfo } = useAuth()

	const imageRef = ref(storage, `profiles/mateusz4k@outlook.com`)

	const saveImage = async () => {
		if (imageUpload == null) return
		try {
			await uploadBytes(imageRef, imageUpload)
			const url = await getDownloadURL(imageRef)
			setProfile(url)
			setUrl(undefined)
			await getUserInfo({ image: url })
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<>
			<div className='relative'>
				<Avatar
					sizes='lg'
					src={profile}
					alt='M'
					className='!bg-primary !w-[175px] !h-[175px] !text-7xl !border-2 !border-primary'
				/>
				<IconButton
					className='!absolute !-bottom-5 !right-1'
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
			{imageUpload ? (
				<button
					type='submit'
					className='bg-primary p-2 rounded-lg text-white mt-5 mx-auto'
					onClick={saveImage}>
					Save image
				</button>
			) : (
				<p className='text-center text-2xl'>Mateusz</p>
			)}
		</>
	)
}
