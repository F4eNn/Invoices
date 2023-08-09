import React from 'react'
import { FieldError } from 'react-hook-form'

interface ErrorMessageProps {
	error: FieldError | undefined
	msg: string | undefined
}

export const ErrorMessage = ({ error, msg }: ErrorMessageProps) => {
	return <div className='text-lightRed mt-[-10px] ml-1'>{error && msg}</div>
}
