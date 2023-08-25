import React from 'react'

export const DynamicDetails = () => {
	return (
		<div className='font-bold text-grayPurple dark:text-rose'>
			{/* desktop */}
			<div className='hidden flex-1 justify-between md:flex'>
				<div className=' flex-1 dark:text-white   '>
					<span className='text-lg text-primaryDark dark:text-white'>Banner Design</span>
				</div>
				<div className='flex flex-1 justify-between'>
					<span className='w-[30px] text-center'>1 </span>
					<span>£ 156.00</span>
					<span className='text-primaryDark dark:text-white'> £ 156.00</span>
				</div>
			</div>
			{/* mobile */}

			<div className='flex items-center justify-between md:hidden'>
				<div className='flex flex-col text-white'>
					<span className='text-lg  text-primaryDark dark:text-white'>Banner Design</span>
					<span className='text-grayPurple'>1 x £ 156.00</span>
				</div>
				<span className='text-xl'>£ 156.00</span>
			</div>
		</div>
	)
}
