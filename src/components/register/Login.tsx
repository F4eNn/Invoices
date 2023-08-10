import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Input } from '@mui/joy'
import dynamic from 'next/dynamic'

import { InputWrapper } from './ui/InputWrapper'
import { ErrorMessage } from './ui/ErrorMessage'
import { useAuth } from '@/hooks/useAuth'

const LoadingButton = dynamic(() => import('../ui/LoadingButton').then(mod => mod.LoadingButton), { ssr: false })

export const inputStyle = {
	className: 'mb-5',
	sx: {
		'&::before': {
			border: '1.5px solid #7C5DFA',
			transform: 'scaleX(0)',
			left: '2.5px',
			right: '2.5px',
			bottom: 0,
			top: 'unset',
			transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
			borderRadius: 0,
			borderBottomLeftRadius: '64px 20px',
			borderBottomRightRadius: '64px 20px',
		},
		'&:focus-within::before': {
			transform: 'scaleX(1)',
		},
	},
}

interface LoginFormValues {
	email: string
	password: string
}

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
			<InputWrapper>
				<label htmlFor='email'>Email</label>
				<Input
					{...inputStyle}
					error={errors.email ? true : false}
					id='email'
					type='email'
					autoFocus
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
				<label htmlFor='password'>Password</label>
				<Input
					{...inputStyle}
					error={errors.password ? true : false}
					id='password'
					placeholder='Password'
					type='password'
					{...register('password', {
						required: 'Password is required',
					})}
				/>
				<ErrorMessage
					error={errors.password}
					msg={errors.password?.message}
				/>
			</InputWrapper>
			<div className='mt-5'>
				<LoadingButton isSubmitting={isSubmitting}>Enter</LoadingButton>
			</div>
		</form>
	)
}
