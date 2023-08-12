import React from 'react'
import { FieldError } from 'react-hook-form'

interface ErrorMessageProps {
	error?: FieldError | undefined
	msg: string | undefined
	isValid?: boolean
}

export const ErrorMessage = ({ error, msg, isValid }: ErrorMessageProps) => {
	return <div className='text-lightRed mt-2 ml-1 mb-2'>{(error || isValid) && msg}</div>
}
