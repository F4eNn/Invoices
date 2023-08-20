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
						className='absolute -left-3/4  top-12 flex w-[225px] flex-col gap-1 rounded-lg bg-lightGray px-1 py-3 font-bold shadow-lg dark:bg-secondaryDark dark:text-white sm:-left-1/2'
					>
						{checkboxMenu.map(({ id }) => (
							<li key={id} className='w-full'>
								<label htmlFor={id} className='inline-flex h-full w-full cursor-pointer items-center p-2 '>
									<input
										id={id}
										type='checkbox'
										value={id}
										className='bg-gray-200 form-checkbox  cursor-pointer  rounded  border-transparent  bg-rose text-primary 
                                    transition-all duration-300 dark:form-checkbox hover:ring-1 hover:ring-secondary focus:border-transparent focus:bg-rose focus:ring-1 focus:ring-secondary 
                                    dark:rounded dark:border-transparent dark:bg-lightDark dark:text-primary dark:focus:border-transparent dark:focus:bg-lightDark dark:focus:ring-1 dark:focus:ring-secondary'
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
