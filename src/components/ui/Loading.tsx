// 'use client'
// import { usePathname } from 'next/navigation'
// import React, { useEffect, useState } from 'react'
// import DotLoader from 'react-spinners/DotLoader'

// export const Loading = () => {
// 	const [isLoading, setIsLoading] = useState(false)

// 	const pathname = usePathname()
// 	useEffect(() => {

// 		setIsLoading(true)


// 		const timeout = setTimeout(() => {
// 				setIsLoading(false)
// 		}, 250)

// 		return () => {
// 			clearInterval(timeout)
// 			setIsLoading(false)
// 		}
// 	}, [pathname])
// 	return (
// 		<>
// 			{isLoading && (
// 				<div className='fixed inset-0 z-[999] flex  items-center justify-center bg-primary'>
// 					<DotLoader size='6.5em' color='#fff' />
// 				</div>
// 			)}
// 		</>
// 	)
// }
