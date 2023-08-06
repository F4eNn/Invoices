'use client'
import React, { useState, useEffect } from 'react'


export const SwitchModeBtn = () => {
	const [isDarkMode, setDarkMode] = useState(false)

	const handleChangeTheme = () => {
		setDarkMode(prev => !prev)
		if (isDarkMode) localStorage.setItem('theme', 'dark')
		if (!isDarkMode) localStorage.setItem('theme', 'light')
	}
	useEffect(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isDarkMode])

	return (
		<button
			onClick={handleChangeTheme}
			className='w-max mr-5 sm:mr-10 p-3 my-auto  group lg:mb-5 lg:mx-auto  '>
			<svg
				width='20'
				height='20'
				fill='#7E88C3'
				className='group-hover:fill-primary transition fill duration-300  scale-125'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M19.502 11.342a.703.703 0 00-.588.128 7.499 7.499 0 01-2.275 1.33 7.123 7.123 0 01-2.581.46A7.516 7.516 0 018.74 11.06a7.516 7.516 0 01-2.198-5.316c0-.87.153-1.713.41-2.48.28-.817.69-1.559 1.226-2.197a.652.652 0 00-.102-.92.703.703 0 00-.588-.128C5.316.607 3.425 1.91 2.07 3.649A10.082 10.082 0 000 9.783C0 12.57 1.125 15.1 2.965 16.94a10.04 10.04 0 007.156 2.965c2.352 0 4.524-.818 6.262-2.173a10.078 10.078 0 003.579-5.597.62.62 0 00-.46-.793z'
					className='w-32 h-32'
				/>
			</svg>
		</button>
	)
}
