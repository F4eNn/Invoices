'use client'
import React, { ReactNode } from 'react'

import { AnimatePresence } from '@/lib/motion'

export const PageTransition = ({ children }: { children: ReactNode }) => {
	return (
		<AnimatePresence mode='wait' initial={false}>
			{children}
		</AnimatePresence>
	)
}
