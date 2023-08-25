import React from 'react'

import { type InvoiceDataProviderType } from '@/context/InvoiceProvider'

export const DynamicDetails = ({ items }: Pick<InvoiceDataProviderType, 'items'>) => {
	return (
		<div className='font-bold text-grayPurple dark:text-rose'>
			{/* desktop */}
			{items.map(({ name, price, quantity }) => (
				<>
					<div className='hidden flex-1 justify-between md:flex'>
						<div className=' flex-1 dark:text-white'>
							<span className='text-lg text-primaryDark dark:text-white'>{name}</span>
						</div>
						<div className='flex flex-1 justify-between'>
							<span className='w-[30px] text-center'>{quantity} </span>
							<span>£ {price}</span>
							<span className='text-primaryDark dark:text-white'> £ {(price as number) * (quantity as number)}</span>
						</div>
					</div>
					{/* mobile */}

					<div className='flex items-center justify-between md:hidden'>
						<div className='flex flex-col text-white'>
							<span className='text-lg  text-primaryDark dark:text-white'>{name}</span>
							<span className='text-grayPurple'>{`${quantity} x £ ${price}`}</span>
						</div>
						<span className='text-xl'>£ {(price as number) * (quantity as number)}</span>
					</div>
				</>
			))}
		</div>
	)
}
