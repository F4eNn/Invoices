'use client'
import React, { useEffect, useState } from 'react'

import { IconMoon } from '../icons/Moon'
import { IconSun } from '../icons/Sun'
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
		<button aria-label='change theme' onClick={setTheme} className='group my-auto mr-5 w-max p-3  sm:mr-10 lg:mx-auto lg:mb-5  '>
			{theme ? <IconMoon /> : <IconSun />}
		</button>
	)
}
