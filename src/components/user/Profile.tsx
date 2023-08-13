'use client'
import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import { IoCamera } from 'react-icons/io5'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import PulseLoader from 'react-spinners/PulseLoader'

import { useAuth } from '@/hooks/useAuth'
import { storage } from '@/config/firebase'
import { Avatar } from '../ui/Avatar'

export const Profile = () => {
	const [imageUpload, setUrl] = useState<File>()
	const [isSaving, setIsSaving] = useState(false)

	const { updateUserInfo, user } = useAuth()

	const imageRef = ref(storage, `profiles/${user?.email}`)

	const saveImage = async () => {
		if (imageUpload == null) return
		try {
			setIsSaving(true)
			await uploadBytes(imageRef, imageUpload)
			const url = await getDownloadURL(imageRef)
			await updateUserInfo({ image: url })
			setUrl(undefined)
			setIsSaving(false)
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<>
			<div className='relative w-max'>
				<Avatar
					height='h-[175px]'
					width='w-[175px]'
					text='7xl'
				/>
				<IconButton
					className='!absolute !-bottom-1 text-lightGray !right-3 !bg-black/90 hover:!text-secondary !transition-colors'
					component='label'
					aria-label='upload profile picture'>
					<input
						hidden
						accept='image/*'
						type='file'
						onChange={e => setUrl(e.target.files![0])}
					/>
					<div className='  text-inherit'>
						<IoCamera size='1.2em' />
					</div>
				</IconButton>
			</div>
			<div className='mt-4 flex justify-center'>
				{imageUpload ? (
					<button
						type='submit'
						className='bg-primary p-2 rounded-lg text-white animate-bounce hover:bg-secondary transition-colors w-28 '
						onClick={saveImage}>
						{isSaving ? (
							<PulseLoader
								color='#fff'
								size={10}
							/>
						) : (
							'Save Image'
						)}
					</button>
				) : (
					<p className='text-center text-3xl capitalize'>{user?.name}</p>
				)}
			</div>
		</>
	)
}
