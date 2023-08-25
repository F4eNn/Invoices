import React from 'react'

type StatusProps = {
	as: 'paid' | 'pending' | 'draft' | undefined
}

const getStatusColors = (as: StatusProps['as']) => {
	switch (as) {
		case 'pending':
			return {
				bg: 'bg-orange/10',
				text: 'text-orange',
				circle: 'bg-orange',
			}
		case 'paid':
			return {
				bg: 'bg-lightGreen/30',
				text: 'text-lightGreen',
				circle: 'bg-lightGreen',
			}
		case 'draft':
			return {
				bg: 'bg-gray/10',
				text: 'text-darkGray dark:text-grayishWhite',
				circle: 'bg-darkGray dark:bg-grayishWhite',
			}
	}
}
export const Status = ({ as }: StatusProps) => {

	const colors = getStatusColors(as)
	
	return (
		<div className={`w-[125px] rounded-md ${colors?.bg} py-2.5  text-center ${colors?.text}`}>
			<div className='inline-flex items-center gap-2.5 text-lg font-bold '>
				<div className={`h-2.5 w-2.5 rounded-full ${colors?.circle}`} />
				<span className='h-6 capitalize'>{as}</span>
			</div>
		</div>
	)
}
