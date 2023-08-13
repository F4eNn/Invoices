import React from 'react'
import { useForm } from 'react-hook-form'
import { TextField, styled } from '@mui/material'

import { InputWrapper } from '../ui/Forms/InputWrapper'
import { ErrorMessage } from '../ui/Forms/ErrorMessage'
import { useAuth } from '@/hooks/useAuth'
import { SubmitButton } from '../ui/SubmitButton'


interface LoginFormValues {
	email: string
	password: string
}

export const Input = styled(TextField)({
	'& label.Mui-focused': {
		color: '#9277ff',
	},

	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: '#9277ff',
			color: '#9277ff',
		},
		'&:hover fieldset': {
			borderColor: '#9277ff',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#9277ff',
		},
	},
})

export const Login = () => {
	const { logInUser, invalidCredentials } = useAuth()
	const { register, handleSubmit, formState } = useForm<LoginFormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	})
	const { errors, isSubmitting } = formState

	const login = async (data: LoginFormValues) => {
		await logInUser(data.email, data.password)
	}

	return (
		<form
			onSubmit={handleSubmit(login)}
			noValidate>
			<div className='text-center'>
				<ErrorMessage
					isValid={invalidCredentials}
					msg='Invalid credentials'
				/>
			</div>
			<div className='flex flex-col gap-3'>
				<InputWrapper>
					<Input
						error={errors.email ? true : false}
						id='email'
						type='email'
						autoFocus
						label='Email'
						variant='outlined'
						placeholder='John@doehub.com'
						{...register('email', {
							required: 'Email is required',
						})}
					/>
					<ErrorMessage
						error={errors.email}
						msg={errors.email?.message}
					/>
				</InputWrapper>
				<InputWrapper>
					<Input
						error={errors.password ? true : false}
						id='password'
						type='password'
						label='Password'
						{...register('password', {
							required: 'Password is required',
						})}
					/>
					<ErrorMessage
						error={errors.password}
						msg={errors.password?.message}
					/>
				</InputWrapper>
			</div>
			<div className='mt-5'>
				<SubmitButton isSubmitting={isSubmitting}>Enter</SubmitButton>
			</div>
		</form>
	)
}
