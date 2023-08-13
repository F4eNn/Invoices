import React from 'react'
import { Avatar as MuiAvatar } from '@mui/material'

import { useAuth } from '@/hooks/useAuth'

interface AvatarProps {
	height?: 'h-16' | 'h-[175px]'
	width?: 'w-16' | 'w-[175px]'
	text?: '7xl'
}

export const Avatar = ({ height = 'h-16', width = 'w-16', text }: AvatarProps) => {
	const { user } = useAuth()
	return (
		<MuiAvatar
			src={user?.image}
			alt={user?.name}
			className={`!bg-secondary ${width} ${height} border-2 ${text} border-primary`}>
			MuiAvatar{' '}
		</MuiAvatar>
	)
}
