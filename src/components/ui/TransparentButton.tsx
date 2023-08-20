import React, { ReactNode } from 'react'

type ButtonProps = {
	children: ReactNode
	onClickHandler?: () => void
}

export const TransparentButton = ({ children, onClickHandler }: ButtonProps) => {
	return (
		<button onClick={onClickHandler} className=''>
			{children}
		</button>
	)
}
