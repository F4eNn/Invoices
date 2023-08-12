import type { Variants } from 'framer-motion'

export const menuAnimation: Variants = {
	hidden: { scale: 0, opacity: 0 },
	visible: { scale: 1, opacity: 1 },
	exit: { opacity: 0, scale: 0 },
}
export const shuffleAnimation: Variants = {
	initial: { opacity: 0, x: 80 },
	animate: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 80 },
}
