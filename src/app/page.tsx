import React from 'react'

import { InvoiceControl } from '@/components/content/InvoiceControl'
import { Pannel } from '@/components/pannel/Pannel'
import { ContentWrapper } from '@/components/ui/ContentWrapper'
import { InvoiceBody } from '@/components/content/InvoiceBody'
import { FormProvider, MenageFormProvider } from '@/context/FormProviders'
import { Portal } from '@/constants/Portal'
import { Create } from '@/components/content/Create'
import { AuthGuard } from '@/constants/AuthGuard'

export default function Home() {
	return (
		<main className='flex flex-col lg:flex-row h-full '>
			<Pannel />
			<ContentWrapper>
				<AuthGuard>
					<div className='flex  h-full flex-col '>
						<FormProvider>
							<MenageFormProvider>
								<InvoiceControl />
								<Portal selector='#form'>
									<Create />
								</Portal>
							</MenageFormProvider>
						</FormProvider>
						<InvoiceBody />
					</div>
				</AuthGuard>
			</ContentWrapper>
		</main>
	)
}
