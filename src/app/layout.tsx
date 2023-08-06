import './globals.css'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'

import { Pannel } from '@/components/pannel/Pannel'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'red' },
		{ media: '(prefers-color-scheme: dark)', color: 'red' },
	],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' >
			<body className={`${leagueSpartan.className} bg-lightGray flex flex-col lg:flex-row dark:bg-black `}>
				<nav>
					<Pannel />
				</nav>
				{children}
			</body>
		</html>
	)
}
