import { RefObject, useEffect, useState } from 'react'

import { useToggle } from './useToggle'
// eslint-disable-next-line no-unused-vars
export const useOutsideClick = (ref: RefObject<HTMLDivElement>, defaultState = false) => {
  const [refObj, setRef] = useState<RefObject<HTMLDivElement>>()

  const [isOpen, toggleState] = useToggle()

  const outsideHandler = (e: MouseEvent) => {
    if (ref.current && e.target != refObj?.current && isOpen) {
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
    toggleState
  }
}