'use client'
import React, { useEffect, useState } from 'react'

import { IconMoon } from './IconMoon'
import { IconSun } from './IconSun'

import { useToggle } from '@/hooks/useToggle'

type ThemeState =
	| {
			currentTheme: boolean | null
	  }
	| undefined

const getTheme = (): ThemeState => {
	if (typeof window === 'undefined') return
	const theme = localStorage.getItem('theme')
	const prefferenceTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

	return {
		currentTheme: theme ? JSON.parse(theme) : prefferenceTheme ? JSON.parse(`${prefferenceTheme}`) : null,
	}
}
export const SwitchModeBtn = () => {
	const [isMounted, setIsMounted] = useState(false)
	const { currentTheme: themeState } = getTheme() || { currentTheme: null }
	const refinedThemeState: boolean = themeState !== null ? themeState : false

	const [theme, setTheme] = useToggle(refinedThemeState)

	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(theme))
		// eslint-disable-next-line no-unused-expressions
		theme ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
	}, [theme])

	useEffect(() => {
		setIsMounted(true)
	}, [isMounted])

	if (!isMounted) {
		return null
	}

	return (
		<button
			onClick={setTheme}
			className='w-max mr-5 sm:mr-10 p-3 my-auto  group lg:mb-5 lg:mx-auto  '>
			{theme ? <IconMoon /> : <IconSun />}
		</button>
	)
}
