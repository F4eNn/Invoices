'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '@mui/joy/Input'

import { inputStyle } from './Login'
import { FormContainer } from './ui/FormContainer'
import { Button } from '../ui/Button'
import { ErrorMessage } from './ui/ErrorMessage'
import { InputWrapper } from './ui/InputWrapper'
import { emailValidation, nameValidation, passwordValidation } from '@/helpers/formValidation'

type FormValues = {
	email: string
	name: string
	password: string
	password2: string
}

export const Signup = () => {
	const { formState, handleSubmit, register, reset, watch } = useForm<FormValues>({
		defaultValues: {
			email: '',
			name: '',
			password: '',
			password2: '',
		},
	})
	const { errors } = formState

	const signup = (data: FormValues) => {
		reset()
	}

	return (
		<FormContainer>
			<form
				onSubmit={handleSubmit(signup)}
				noValidate>
				<h1 className='text-headingL mb-5'>Invoices</h1>
				<InputWrapper>
					<label htmlFor='name'>Name</label>
					<Input
						{...inputStyle}
						error={errors.name ? true : false}
						id='name'
						type='name'
						placeholder='John'
						{...register('name', nameValidation)}
					/>
					<ErrorMessage
						error={errors.name}
						msg={errors.name?.message}
					/>
				</InputWrapper>
				<InputWrapper>
					<label htmlFor='email'>Email</label>
					<Input
						{...inputStyle}
						error={errors.email ? true : false}
						id='email'
						type='email'
						placeholder='John@doehub.com'
						{...register('email', emailValidation)}
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
						type='Password'
						placeholder='Password'
						{...register('password', passwordValidation)}
					/>
					<ErrorMessage
						error={errors.password}
						msg={errors.password?.message}
					/>
				</InputWrapper>
				<InputWrapper>
					<label htmlFor='repeatPassword'>Confirm Password</label>
					<Input
						{...inputStyle}
						error={errors.password2 ? true : false}
						id='repeatPassword'
						type='Password'
						placeholder='Repeat password'
						{...register('password2', {
							required: 'Confirm password is required',
							validate: password => {
								if (watch('password') !== password) return 'Your passwords do no match'
							},
						})}
					/>
					<ErrorMessage
						error={errors.password2}
						msg={errors.password2?.message}
					/>
				</InputWrapper>
				<div className='mt-10'>
					<Button
						type='submit'
						bg='bg-primary'
						bgHover='hover:bg-secondary'>
						Enter
					</Button>
				</div>
			</form>
		</FormContainer>
	)
}
