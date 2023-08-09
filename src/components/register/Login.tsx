import React from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '@mui/joy'

import { Button } from '../ui/Button'
import { InputWrapper } from './ui/InputWrapper'
import { ErrorMessage } from './ui/ErrorMessage'

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
	const { register, handleSubmit, formState } = useForm<LoginFormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const { errors } = formState

	const login = (data: LoginFormValues) => {}

	return (
			<form onSubmit={handleSubmit(login)}>
				<InputWrapper>
					<label htmlFor='email'>Email</label>
					<Input
						{...inputStyle}
						error={errors.email ? true : false}
						id='email'
						type='email'
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
					<Button
						type='submit'
						bg='bg-primary'
						bgHover='hover:bg-secondary'>
						Enter
					</Button>
				</div>
			</form>
	)
}
