'use client'
import React, { useEffect } from 'react'
import { redirect, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { Login } from '@/components/register/Login'
import { Signup } from '@/components/register/Signup'
import { FormContainer } from '@/components/register/ui/FormContainer'
import { useAuth } from '@/hooks/useAuth'
import { navigation } from '@/navigation_paths'

const RegisterPage = () => {
	const searchParams = useSearchParams()
	const isLogin = searchParams.get('mode') === 'login'
	const { isAuthenticated } = useAuth()

	useEffect(() => {
		if (isAuthenticated) redirect(navigation.home.path)
	}, [isAuthenticated])

	const label = isLogin ? navigation.signUp.label : navigation.login.label
	const path = isLogin ? navigation.signUp.path : navigation.login.path
	
	return (
		<div className='h-full bg-secondary pt-20 px-3'>
			<FormContainer>
				<div className='flex gap-3 mb-10 items-center  '>
					<div className='bg-primary p-3 rounded-xl overflow-hidden relative z-0'>
						<div className='bg-secondary w-full h-1/2 z-[-1] rounded-tl-xl absolute bottom-0 left-0' />
						<Image
							alt='logo'
							src='./assets/logo.svg'
							width={25}
							height={25}
						/>
					</div>
					<h1 className='text-headingL h-[30px] '>Invoices</h1>
				</div>
				<h2 className='mb-8 text-3xl font-[500] '>{isLogin ? 'Log in' : 'Sign up'}</h2>
				{isLogin ? <Login /> : <Signup />}
				<p className='mt-5'>
					{isLogin ? 'No account?' : 'Have an account already?'}{' '}
					<Link
						className='text-primary'
						aria-label={label}
						href={path}>
						{isLogin ? 'Sign up' : 'Log in'}
					</Link>
				</p>
			</FormContainer>
		</div>
	)
}

export default RegisterPage
