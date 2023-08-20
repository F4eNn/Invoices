import React from 'react'
import Image from 'next/image'
import { BiSolidUser } from 'react-icons/bi'

import { useAuth } from '@/hooks/useAuth'

interface AvatarProps {
	height?: 60 | 225
	width?: 60 | 225
	text?: '7xl'
	size?: '7em' | '1.4em'
}

export const Avatar = ({ height = 60, width = 60, size = '1.4em' }: AvatarProps) => {
	const { user } = useAuth()
	return (
		<>
			{user?.image ? (
				<Image
					src={user.image}
					alt='User'
					onLoad={() => <div>hm</div>}
					quality={100}
					width={width}
					height={height}
					className='aspect-square rounded-full border-2 border-primary'
				/>
			) : (
				<BiSolidUser size={size} color='#fff' />
			)}
		</>
	)
}
