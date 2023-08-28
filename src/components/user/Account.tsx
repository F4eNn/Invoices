import React from 'react'
import { useForm } from 'react-hook-form'
import { styled } from '@mui/material'

import { motion } from '@/lib/motion'
import { shuffleAnimation } from '@/animations/animations'
import { Input } from '../register/Login'
import { InputWrapper } from '../ui/Forms/InputWrapper'
import { ErrorMessage } from '../ui/Forms/ErrorMessage'
import { emailValidation, passwordValidation } from '../../constants/formValidation'
import { useAuth } from '@/hooks/useAuth'
import { SubmitButton } from '../ui/SubmitButton'

interface EditCredentials {
	readonly newEmail: string
	readonly newPassword: string
}

export const CredentialInput = styled(Input)({
	'& .MuiInputBase-root': {
		color: '#9277ff',
	},
	'& .MuiFormLabel-root': {
		color: '#9277ff',
	},
})

export const Account = () => {
	const { isEmailExist, updateCredentials } = useAuth()
	const { register, handleSubmit, formState, clearErrors } = useForm<EditCredentials>()

	const { errors, isSubmitting } = formState

	const onUpadteHandler = async (data: EditCredentials) => {
		await updateCredentials(data.newEmail, data.newPassword)
		clearErrors()
	}

	return (
		<motion.div {...shuffleAnimation}>
			<form onSubmit={handleSubmit(onUpadteHandler)} className='flex flex-col gap-5 xl:w-3/4'>
				<h1 className='text-headingL'>Update Profile</h1>
				<ErrorMessage as='registration' isValid={isEmailExist} msg='Email is in use' />
				<InputWrapper>
					<CredentialInput
						error={errors.newEmail ? true : false}
						id='email'
						type='email'
						label='Email'
						placeholder='John@doehub.com'
						{...register('newEmail', emailValidation)}
					/>
					<ErrorMessage as='registration' error={errors.newEmail} msg={errors.newEmail?.message} />
				</InputWrapper>
				<InputWrapper>
					<CredentialInput
						error={errors.newPassword ? true : false}
						id='password'
						type='Password'
						label='Password'
						{...register('newPassword', passwordValidation)}
					/>
					<ErrorMessage as='registration' error={errors.newPassword} msg={errors.newPassword?.message} />
				</InputWrapper>
				<div className='w-1/2 overflow-hidden rounded-xl bg-primary text-base hover:bg-secondary xl:w-full'>
					<SubmitButton textColor='text-white' isSubmitting={isSubmitting}>Update</SubmitButton>
				</div>
			</form>
		</motion.div>
	)
}
