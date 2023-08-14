import React, { useRef } from 'react'

import { TransparentButton } from '../ui/TransparentButton'
import { ArrowDownIcon } from '../icons/ArrowDown'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { AnimatePresence, motion } from '@/lib/motion'
import { menuAnimation } from '@/animations/animations'

const checkboxMenu = [{ id: 'draft' }, { id: 'pending' }, { id: 'paid' }]

export const Filter = () => {
	const targetReached = useMediaQuery('576')
	const menuRef = useRef<HTMLMenuElement>(null)
	const { isOpen, toggleState } = useOutsideClick(menuRef, false)

	return (
		<div className='relative'>
			<TransparentButton onClickHandler={toggleState}>
				<div className='inline-flex items-center gap-3 '>
					{targetReached ? 'Filter by status ' : 'Filter '}
					<span className={`${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}>
						<ArrowDownIcon />
					</span>
				</div>
			</TransparentButton>
			<AnimatePresence>
				{isOpen && (
					<motion.menu
						{...menuAnimation}
						ref={menuRef}
						className='dark:bg-secondaryDark bg-lightGray  dark:text-white font-bold flex flex-col gap-1 w-[225px] py-3 px-1 rounded-lg absolute top-12 -left-3/4 sm:-left-1/2 shadow-lg'>
						{checkboxMenu.map(({ id }) => (
							<li
								key={id}
								className='w-full'>
								<label
									htmlFor={id}
									className='inline-flex items-center w-full h-full p-2 cursor-pointer '>
									<input
										id={id}
										type='checkbox'
										value={id}
										className='form-checkbox bg-rose  text-primary  rounded  bg-gray-200  border-transparent focus:border-transparent 
                                    focus:bg-rose hover:ring-secondary hover:ring-1 focus:ring-1 focus:ring-secondary cursor-pointer dark:form-checkbox dark:bg-lightDark dark:text-primary 
                                    dark:focus:border-transparent dark:border-transparent dark:focus:ring-1 dark:focus:ring-secondary dark:focus:bg-lightDark dark:rounded transition-all duration-300'
									/>
									<span className='ml-2 h-5 capitalize'>{id}</span>
								</label>
							</li>
						))}
					</motion.menu>
				)}
			</AnimatePresence>
		</div>
	)
}
