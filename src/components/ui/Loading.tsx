import React from 'react'
import DotLoader from 'react-spinners/DotLoader'

export const Loading = () => {
	return (
		<div className='fixed inset-0 z-[999] flex  items-center justify-center bg-primary'>
			<DotLoader size='6.5em' color='#fff' />
		</div>
	)
}
