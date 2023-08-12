import { useEffect, useState, useCallback } from 'react'

export const useMediaQuery = (width: string) => {
	const [targetReached, setTargetReached] = useState(false)

	const updateMedia = useCallback((e: MediaQueryListEvent) => {
		if (e.matches) setTargetReached(true)
		else setTargetReached(false)
	}, [])

	useEffect(() => {
		const media = window.matchMedia(`(min-width: ${width}px)`)
		media.addEventListener('change', updateMedia)
		// check on mount
		if (media.matches) setTargetReached(true)

		return () => media.removeEventListener('change', updateMedia)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return targetReached
}
