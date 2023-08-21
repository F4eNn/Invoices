import React from 'react'
import { FieldError } from 'react-hook-form'

type ErrorTypeProps = {
	error?: FieldError | undefined
	msg: string | undefined
	isValid?: boolean
	as: 'invoice' | 'registration'
}

export const ErrorMessage = ({ as, msg, error, isValid }: ErrorTypeProps) => {
	if (as === 'invoice') {
		// eslint-disable-next-line quotes
		return <p className='  text-xs text-red'>{error && (msg || "Can't be empty")}</p>
	}

	return <p className='mb-2 ml-1 mt-2 text-lightRed'>{(error || isValid) && msg}</p>
}
