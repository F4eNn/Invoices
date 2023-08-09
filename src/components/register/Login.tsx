import React, { FormEvent } from 'react'
import { Input } from '@mui/joy'

import { FormContainer } from './ui/FormContainer'
import { Button } from '../ui/Button'

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

export const Login = () => {
	const login = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<FormContainer>
			<form onSubmit={login}>
				<h1 className='text-headingL mb-5'>Invoices</h1>
				<div>
					<label htmlFor='email'>Email</label>
					<Input
						{...inputStyle}
						id='email'
						type='email'
						placeholder='John@doehub.com'
						variant='soft'
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<Input
						{...inputStyle}
						id='password'
						placeholder='Password'
						type='password'
						variant='soft'
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
