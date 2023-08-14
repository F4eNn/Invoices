import type { Variants } from 'framer-motion'

export const menuAnimation: Variants = {
	initial: { scale: 0, opacity: 0 },
	animate: { scale: 1, opacity: 1 },
	exit: { opacity: 0, scale: 0 },
}
export const shuffleAnimation: Variants = {
	initial: { opacity: 0, x: 120 },
	animate: {
		opacity: 1,
		x: 0,
		transition: { type: 'spring', bounce: 0.4, duration: 0.4 },
	},
	exit: { opacity: 0, x: 120 },
}
export const formAnimation: Variants = {
	initial: { opacity: 0, y: 100 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 50 },
}
