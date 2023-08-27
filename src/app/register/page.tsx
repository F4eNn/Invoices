'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { Login } from '@/components/register/Login'
import { Signup } from '@/components/register/Signup'
import { FormContainer } from '@/components/register/ui/FormContainer'
import { navigation } from '@/constants/navigation_paths'
import { AuthGuard } from '@/constants/AuthGuard'

const RegisterPage = () => {
	const searchParams = useSearchParams()
	const isLogin = searchParams.get('mode') === 'login'

	const label = isLogin ? navigation.signUp.label : navigation.login.label
	const path = isLogin ? navigation.signUp.path : navigation.login.path

	return (
		<div className='h-screen bg-secondary px-3 pt-20'>
			<AuthGuard>
				<FormContainer>
					<div className='mb-10 flex items-center gap-3  '>
						<div className='relative z-0 overflow-hidden rounded-xl bg-primary p-3'>
							<div className='absolute bottom-0 left-0 z-[-1] h-1/2 w-full rounded-tl-xl bg-secondary' />
							<Image alt='logo' src='./assets/logo.svg' width={25} height={25} />
						</div>
						<h1 className='h-[30px] text-headingL '>Invoices</h1>
					</div>
					<h2 className='mb-8 text-3xl font-[500] '>{isLogin ? 'Log in' : 'Sign up'}</h2>
					{isLogin ? <Login /> : <Signup />}
					<p className='mt-5'>
						{isLogin ? 'No account?' : 'Have an account already?'}{' '}
						<Link className='underlineLink relative text-primary' aria-label={label} href={path}>
							{isLogin ? 'Sign up' : 'Log in'}
						</Link>
					</p>
				</FormContainer>
			</AuthGuard>
		</div>
	)
}

export default RegisterPage
