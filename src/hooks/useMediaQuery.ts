import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string) => {
	const [matches, setMetches] = useState(false)
	useEffect(() => {
		const matchQuery = window.matchMedia(query)
		const handleMediaChange = (e: MediaQueryListEvent) => {
			setMetches(e.matches)
		}
		matchQuery.addEventListener('change', handleMediaChange)

		return () => {
			matchQuery.removeEventListener('change', handleMediaChange)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query])

	return matches
}
