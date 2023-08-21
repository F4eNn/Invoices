import React from 'react'
import { useForm } from 'react-hook-form'

import { ErrorMessage } from '../ui/Forms/ErrorMessage'
import { InputWrapper } from '../ui/Forms/InputWrapper'
import { emailValidation, nameValidation, passwordValidation } from '@/constants/formValidation'
import { useAuth } from '@/hooks/useAuth'
import { Input } from './Login'
import { useDate } from '@/hooks/useDate'
import { SubmitButton } from '../ui/SubmitButton'
import { notify } from '@/constants/notify'

type FormValues = {
	email: string
	name: string
	password: string
	password2: string
}

export const Signup = () => {
	const { createUser, isEmailExist, updateUserInfo } = useAuth()
	const currentDate = useDate()
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
		await createUser(data.email.toLowerCase(), data.password)
		const userInfo = { name: data.name, email: data.email.toLowerCase(), created: currentDate }
		await updateUserInfo(userInfo)
		notify('Welcome aboard!')
	}
	return (
		<form onSubmit={handleSubmit(signup)} noValidate>
			<div className='w-full text-center'>
				<ErrorMessage as='registration' isValid={isEmailExist} msg='Email is in use' />
			</div>
			<div className='flex flex-col gap-3'>
				<InputWrapper>
					<Input
						error={errors.name ? true : false}
						id='name'
						autoFocus
						label='Name'
						type='name'
						placeholder='John'
						{...register('name', nameValidation)}
					/>
					<ErrorMessage as='registration' error={errors.name} msg={errors.name?.message} />
				</InputWrapper>
				<InputWrapper>
					<Input
						error={errors.email ? true : false}
						id='email'
						type='email'
						label='Email'
						placeholder='John@doehub.com'
						{...register('email', emailValidation)}
					/>
					<ErrorMessage as='registration' error={errors.email} msg={errors.email?.message} />
				</InputWrapper>
				<InputWrapper>
					<Input
						error={errors.password ? true : false}
						id='password'
						type='Password'
						label='Password'
						{...register('password', passwordValidation)}
					/>
					<ErrorMessage as='registration' error={errors.password} msg={errors.password?.message} />
				</InputWrapper>
				<InputWrapper>
					<Input
						error={errors.password2 ? true : false}
						id='repeatPassword'
						type='Password'
						label='Confirm Password'
						{...register('password2', {
							required: 'Confirm password is required',
							validate: password => {
								if (watch('password') !== password) return 'Your passwords do no match'
							},
						})}
					/>
					<ErrorMessage as='registration' error={errors.password2} msg={errors.password2?.message} />
				</InputWrapper>
			</div>
			<div className='mt-5 overflow-hidden rounded-xl  bg-primary text-base text-white hover:bg-secondary'>
				<SubmitButton isSubmitting={isSubmitting}>Create</SubmitButton>
			</div>
		</form>
	)
}
