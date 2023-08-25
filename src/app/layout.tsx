import './globals.css'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { AuthProvider } from '@/context/AuthProvider'
import { FormProvider } from '@/context/FormProviders'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Invoices',
	description: 'Generated by create next app',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#9277FF' },
		{ media: '(prefers-color-scheme: dark)', color: '#9277FF' },
	],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${leagueSpartan.className} duration-250 bg-lightGray transition-colors dark:bg-black `}>
				<ToastContainer />
				<AuthProvider>
					<FormProvider>{children}</FormProvider>
				</AuthProvider>
			</body>
		</html>
	)
}
