import './globals.css'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { AuthProvider } from '@/context/AuthProvider'
import { InvoiceProvider } from '@/context/InvoiceProvider'
import { PageTransition } from '@/components/ui/PageTransition'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Invoices',
	description: 'App for menage invoices',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#9277FF' },
		{ media: '(prefers-color-scheme: dark)', color: '#9277FF' },
	],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={`${leagueSpartan.className} duration-250 form-scroll-light dark:form-scroll bg-lightGray transition-colors dark:bg-black `}
			>
				<ToastContainer />
				<AuthProvider>
					<InvoiceProvider>
						<div id='modal' />
						<PageTransition>{children}</PageTransition>
					</InvoiceProvider>
				</AuthProvider>
			</body>
		</html>
	)
}
