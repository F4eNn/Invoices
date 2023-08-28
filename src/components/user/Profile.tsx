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
				<Avatar height={225} width={225} text='7xl' size='7em' />
				<IconButton
					className='!absolute !-bottom-3 !right-2 !bg-black/90 text-lightGray !transition-colors hover:!text-secondary'
					component='label'
					aria-label='upload profile picture'
				>
					<input hidden accept='image/*' type='file' onChange={e => setUrl(e.target.files![0])} />
					<div className='!text-white'>
						<IoCamera size='1.3em'/>
					</div>
				</IconButton>
			</div>
			<div className='mt-4 flex justify-center'>
				{imageUpload ? (
					<button
						type='submit'
						className='w-28 animate-bounce rounded-lg bg-primary p-2 text-white transition-colors hover:bg-secondary '
						onClick={saveImage}
					>
						{isSaving ? <PulseLoader color='#fff' size={10} /> : 'Save Image'}
					</button>
				) : (
					<p className='text-center text-3xl capitalize'>{user?.name}</p>
				)}
			</div>
		</>
	)
}
