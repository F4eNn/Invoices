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

export const animateForm: Variants = {
	initial: { x: '-100%', opacity: 0 },
	animate: { x: 0, transition: { duration: 0.3 }, opacity: 1 },
	exit: { x: '-100%', transition: { duration: 0.3 }, opacity: 0 },
}

export const animateModal: Variants = {
	initial: { scale: 0.5, opacity: 0 },
	animate: { scale: 1, opacity: 1, transition: { duration: 0.2 } },
	exit: { scale: 0.5, opacity: 0, transition: { duration: 0.2 } },
}

export const pageTransition: Variants = {
	initial: { opacity: 0, clipPath: 'polygon(50% 0, 50% 100%, 50% 100%, 50% 0)' },
	animate: {
		opacity: 1,
		clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)',
		transition: { opacity: { duration: 1.5 }, clipPath: { duration: 0.75 } },
	},
}
export const pulseAnimation: Variants = {
	hidden: { scale: 1 },
	visible: {
		scale: [1, 1.05, 1],
		transition: {
			duration: 2,
			ease: 'easeInOut',
			times: [0, 0.2, 0.5, 0.8, 1],
			repeat: Infinity,
		},
	},
}