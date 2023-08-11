import React from 'react'
import Image from 'next/image'

export const Logo = () => {
	return (
		<div className=' w-24 h-full rounded-tr-3xl bg-primary lg:h-28 flex rounded-br-3xl  overflow-hidden relative lg:w-full'>
			<div className='h-1/2 bg-secondary w-full mt-auto  rounded-tl-3xl'></div>
			<div className=' w-full h-full flex justify-center items-center absolute'>
				<Image
					alt='logo'
					src='./assets/logo.svg'
					width={35}
					height={35}
				/>
			</div>
		</div>
	)
}
