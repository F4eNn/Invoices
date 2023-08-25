import React from 'react'

import { DynamicDetails } from './DynamicDetails'

export const DetailsBody = () => {
	return (
		<div className='mb-24 mt-10 flex flex-col gap-6 rounded-lg bg-white px-5 py-10 text-grayPurple  shadow-sm dark:bg-primaryDark dark:text-rose md:mb-20 md:p-10 '>
			<div className='flex flex-col gap-12 sm:gap-6 '>
				<div className='flex flex-wrap items-start justify-between gap-12'>
					<div className='flex flex-col gap-2'>
						<p className='text-xl font-bold text-primaryDark dark:text-lightGray'>
							<span className='dark:text-gray '>#</span>XM9141
						</p>
						<span>Graphic Design</span>
					</div>
					<div className='flex flex-col  text-right'>
						<span>19 Union Terrace</span>
						<span>London</span>
						<span>E1 3EZ</span>
						<span>United Kingdom</span>
					</div>
				</div>
				<div className='flex w-full flex-wrap items-start justify-between gap-14'>
					<div className='flex flex-1 justify-between gap-10'>
						<div className='flex min-w-max flex-1 flex-col justify-between'>
							<div className='flex flex-col gap-3'>
								<span>Invoice Date</span>
								<span className='font-bold text-primaryDark dark:text-white'>21 Aug 2021</span>
							</div>
							<div className='flex flex-col gap-3'>
								<span>Payment Due</span>
								<span className='font-bold text-primaryDark dark:text-white'>20 Sep 2021</span>
							</div>
						</div>
						<div className='flex min-w-max flex-1 flex-col '>
							<span>Bill To</span>
							<span className='my-2 font-bold text-primaryDark dark:text-white'>Alex Grim</span>
							<span>84 Church Way</span>
							<span>Bradford</span>
							<span>BD1 92B</span>
							<span>United Kingdom</span>
						</div>
					</div>
					<div className='flex flex-1 flex-col gap-3'>
						<span>Sent to</span>
						<span className='font-bold text-primaryDark dark:text-white'>alexgrim@gmail.com</span>
					</div>
				</div>
			</div>

			<div className='relative mt-10 flex flex-col overflow-hidden rounded-lg bg-lightGray px-5 py-10 shadow-sm dark:bg-secondaryDark md:p-10'>
				{/* desktop */}
				<div className='mb-32 flex flex-col gap-7'>
					<div className=' hidden items-center justify-between md:flex'>
						<span className='flex-1'>Item Name</span>

						<div className='flex flex-1 justify-between'>
							<span>QTY.</span>
							<span>Price</span>
							<span>Total</span>
						</div>
					</div>
					<DynamicDetails />
					<DynamicDetails />
				</div>
				<div className='absolute bottom-0 left-0 right-0 flex  items-center justify-between bg-darkGray px-5 py-10 text-lightGray dark:bg-black md:p-10'>
					<span>Amount Due</span>
					<span className='text-3xl font-bold'>£ 556.00</span>
				</div>
			</div>
		</div>
	)
}
