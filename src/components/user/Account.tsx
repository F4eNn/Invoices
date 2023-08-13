import React from 'react'
import { useForm } from 'react-hook-form'
import { styled } from '@mui/material'

import { motion } from '@/lib/motion'
import { shuffleAnimation } from '@/animations/animations'
import { Input } from '../register/Login'
import { InputWrapper } from '../ui/Forms/InputWrapper'
import { ErrorMessage } from '../ui/Forms/ErrorMessage'
import { emailValidation, passwordValidation } from '../register/formValidation'
import { useAuth } from '@/hooks/useAuth'
import { SubmitButton } from '../ui/SubmitButton'

interface EditCredentials {
	readonly newEmail: string
	readonly newPassword: string
}

const CredentialInput = styled(Input)({
	'& .MuiInputBase-root': {
		color: '#9277ff',
	},
	'& .MuiFormLabel-root': {
		color: '#9277ff',
	},
})

export const Account = () => {
	const { isEmailExist, updateCredentials } = useAuth()
	const { register, handleSubmit, formState } = useForm<EditCredentials>()

	const { errors, isSubmitting } = formState

	const onUpadteHandler = async (data: EditCredentials) => {
		await updateCredentials(data.newEmail, data.newPassword)
	}

	return (
		<motion.div
			key={'updatePicture'}
			{...shuffleAnimation}>
			<form
				onSubmit={handleSubmit(onUpadteHandler)}
				className='flex flex-col gap-5 w-1/2'>
				<h1 className='text-headingL'>Update Profile</h1>
				<ErrorMessage
					isValid={isEmailExist}
					msg='Email is in use'
				/>
				<InputWrapper>
					<CredentialInput
						error={errors.newEmail ? true : false}
						id='email'
						type='email'
						label='Email'
						placeholder='John@doehub.com'
						{...register('newEmail', emailValidation)}
					/>
					<ErrorMessage
						error={errors.newEmail}
						msg={errors.newEmail?.message}
					/>
				</InputWrapper>
				<InputWrapper>
					<CredentialInput
						error={errors.newPassword ? true : false}
						id='password'
						type='Password'
						label='Password'
						{...register('newPassword', passwordValidation)}
					/>
					<ErrorMessage
						error={errors.newPassword}
						msg={errors.newPassword?.message}
					/>
				</InputWrapper>
				<SubmitButton isSubmitting={isSubmitting}>Update</SubmitButton>
			</form>
		</motion.div>
	)
}