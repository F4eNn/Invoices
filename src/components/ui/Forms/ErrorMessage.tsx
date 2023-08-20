import React from 'react'
import { FieldError } from 'react-hook-form'

interface ErrorMessageProps {
	error?: FieldError | undefined
	msg: string | undefined
	isValid?: boolean
}

export const ErrorMessage = ({ error, msg, isValid }: ErrorMessageProps) => {
	return <div className='mb-2 ml-1 mt-2 text-lightRed'>{(error || isValid) && msg}</div>
}
