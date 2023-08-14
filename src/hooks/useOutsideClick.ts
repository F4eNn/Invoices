import { RefObject, useEffect, useState } from 'react'

import { useToggle } from './useToggle'
export const useOutsideClick = (ref: RefObject<HTMLElement>, closeOnItem = true) => {
	const [refObj, setRef] = useState<RefObject<HTMLElement>>()

	const [isOpen, toggleState] = useToggle()

	const outsideHandler = (e: MouseEvent) => {
		const target = e.target as HTMLElement

		if (!closeOnItem && ref.current?.contains(target)) return

		if ((ref.current && target != refObj?.current && isOpen) || (isOpen && target)) {
			toggleState()
		}
	}
	useEffect(() => {
		setRef(ref)
		window.document.addEventListener('click', outsideHandler)

		return () => {
			window.document.removeEventListener('click', outsideHandler)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen])

	return {
		isOpen,
		toggleState,
	}
}
