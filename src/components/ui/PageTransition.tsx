'use client'
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

import { AnimatePresence, motion } from '@/lib/motion'
import { pageTransition } from '@/animations/animations'

export const PageTransition = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname()
	return (
		<AnimatePresence mode='wait' initial={false}>
			<motion.div className='' key={pathname} {...pageTransition}>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}
