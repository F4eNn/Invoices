import { useCallback, useState } from 'react'

export const useToggle = (initialState = false): [boolean, () => void] => {
	const [state, setState] = useState(initialState)

	const handleToggle = useCallback(() => {
		setState(prev => !prev)
	}, [])
	return [state, handleToggle]
}
