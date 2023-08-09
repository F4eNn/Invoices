'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

import { Login } from '@/components/register/Login'
import { Signup } from '@/components/register/Signup'
import { FormContainer } from '@/components/register/ui/FormContainer'

const RegisterPage = () => {
	const searchParams = useSearchParams()
	const isLogin = searchParams.get('mode') === 'login'
	return (
		<div className='h-full bg-secondary pt-20 px-3'>
			<FormContainer>
				<h1 className='text-headingL mb-5'>Invoices</h1>
				{isLogin ? <Login /> : <Signup />}
				<p className='mt-5'>
					{isLogin ? 'No account?' : 'Have an account already?'}{' '}
					<Link
						className='text-primary'
						href={`?mode=${isLogin ? 'signup' : 'login'}`}>
						{isLogin ? 'Sign up' : 'Log in'}
					</Link>
				</p>
			</FormContainer>
		</div>
	)
}

export default RegisterPage
