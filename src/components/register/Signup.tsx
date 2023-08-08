'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '@mui/joy/Input'

import { FormContainer } from './ui/FormContainer'
import { Button } from '../ui/Button'
import { inputStyle } from './Login'

type FormValues = {
	email: string
	name: string
	password: string
	password2: string
}

export const Signup = () => {
	const { formState, handleSubmit, register, reset } = useForm<FormValues>({
		defaultValues: {
			email: '',
			name: '',
			password: '',
			password2: '',
		},
	})
	const { errors } = formState

	const signup = (data: FormValues) => {
		console.log(data)
	}
	console.log(errors)
	return (
		<FormContainer>
			<form onSubmit={handleSubmit(signup)}>
				<h1 className='text-headingL mb-5'>Invoices</h1>
				<div>
					<label htmlFor='name'>Name</label>
					<Input
						{...inputStyle}
						id='name'
						type='name'
						placeholder='John'
						{...register('name', {
							required: 'This field is required',
						})}
					/>
					<p>{errors.name?.message}</p>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<Input
						{...inputStyle}
						id='email'
						type='email'
						placeholder='John@doehub.com'
						{...register('email')}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<Input
						{...inputStyle}
						id='password'
						type='Password'
						placeholder='Password'
						{...register('password')}
					/>
				</div>
				<div>
					<label htmlFor='repeatPassword'>Repeat Password</label>
					<Input
						{...inputStyle}
						id='repeatPassword'
						type='Password'
						placeholder='Password'
						{...register('password2')}
					/>
				</div>
				<Button
					type='submit'
					bg='bg-primary'
					bgHover='hover:bg-secondary'>
					Enter
				</Button>
			</form>
		</FormContainer>
	)
}
