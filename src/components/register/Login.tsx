import React from 'react'
import { useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'

import { InputWrapper } from './ui/InputWrapper'
import { ErrorMessage } from './ui/ErrorMessage'
import { useAuth } from '@/hooks/useAuth'
import {Input} from '@/lib/muiMaterial'

const LoadingButton = dynamic(() => import('../ui/LoadingButton').then(mod => mod.LoadingButton), { ssr: false })



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
			<div className='flex flex-col gap-5'>
			<InputWrapper>
				<label htmlFor='email'>Email</label>
				<Input
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
			</div>
			<div className='mt-5'>
				<LoadingButton isSubmitting={isSubmitting}>Enter</LoadingButton>
			</div>
		</form>
	)
}
