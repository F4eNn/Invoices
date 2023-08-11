import React from 'react'
import { useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'

import { Input } from '@/lib/muiMaterial'
import { ErrorMessage } from './ui/ErrorMessage'
import { InputWrapper } from './ui/InputWrapper'
import { emailValidation, nameValidation, passwordValidation } from '@/components/register/formValidation'
import { useAuth } from '@/hooks/useAuth'

const LoadingButton = dynamic(() => import('../ui/LoadingButton').then(mod => mod.LoadingButton), { ssr: false })

type FormValues = {
	email: string
	name: string
	password: string
	password2: string
}

export const Signup = () => {
	const { createUser, isAccountExists } = useAuth()

	const { formState, handleSubmit, register, watch } = useForm<FormValues>({
		defaultValues: {
			email: '',
			name: '',
			password: '',
			password2: '',
		},
	})
	const { errors, isSubmitting } = formState

	const signup = async (data: FormValues) => {
		await createUser(data.email, data.password)
	}
	return (
		<form
			onSubmit={handleSubmit(signup)}
			noValidate>
			<div className='text-center w-full'>
				<ErrorMessage
					isValid={isAccountExists}
					msg='Email is in use'
				/>
			</div>
		<div className='flex flex-col gap-5'>
		<InputWrapper>
				<label htmlFor='name'>Name</label>
				<Input

					error={errors.name ? true : false}
					id='name'
					autoFocus
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
					error={errors.password2 ? true : false}
					id='repeatPassword'
					type='Password'
					placeholder='Confirm password'
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
		</div>
			<div className='mt-5'>
				<LoadingButton isSubmitting={isSubmitting}>
					<span>Create</span>
				</LoadingButton>
			</div>
		</form>
	)
}
