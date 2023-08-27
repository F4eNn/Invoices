'use client'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
	children: ReactNode
	selector: string
}

export const Portal = ({ children, selector }: PortalProps) => {
	const refPortal = useRef<HTMLDivElement | null>(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		refPortal.current = document.querySelector(selector)
		setMounted(true)
	}, [selector])

	return mounted ? createPortal(children, refPortal.current as HTMLDivElement) : null
}
