import React from 'react'
import { useForm } from 'react-hook-form'
import { FiEdit } from 'react-icons/fi'
import { IoCloseSharp } from 'react-icons/io5'

import { useAuth } from '@/hooks/useAuth'
import { useToggle } from '@/hooks/useToggle'
import { CredentialInput } from './Account'
import { nameValidation } from '../../constants/formValidation'
import { ErrorMessage } from '../ui/Forms/ErrorMessage'
import { SubmitButton } from '../ui/SubmitButton'
import { motion, AnimatePresence } from '@/lib/motion'
import { notify } from '@/constants/notify'
import { formAnimation } from '@/animations/animations'

interface FormValue {
	readonly newName: string
}
export const GeneralInfoForm = () => {
	const { user, updateUserInfo } = useAuth()
	const [updateName, toggleForm] = useToggle()

	const { register, handleSubmit, formState, reset, clearErrors } = useForm<FormValue>({
		defaultValues: {
			newName: '',
		},
	})
	const { errors, isSubmitting } = formState

	const onUpdateNameHandler = async (data: FormValue) => {
		updateUserInfo({ name: data.newName })
		toggleForm()
		reset()
		clearErrors()
		notify('Name updated')
	}

	return (
		<div className='mb-5 flex flex-1  flex-col md:items-end '>
			<button onClick={toggleForm} className='mb-5 p-2 text-3xl text-primary transition-all hover:text-secondary'>
				{updateName ? <IoCloseSharp /> : <FiEdit />}
			</button>
			<AnimatePresence>
				{updateName && (
					<motion.form
						{...formAnimation}
						onSubmit={handleSubmit(onUpdateNameHandler)}
						className='flex w-full flex-col md:items-end'
					>
						<div className='w-full md:flex md:flex-col md:items-end'>
							<CredentialInput
								label={user?.name}
								className='w-3/4'
								placeholder='New name'
								{...register('newName', { ...nameValidation })}
							/>
							<div className='w-3/4'>
								<ErrorMessage as='registration' msg={errors.newName?.message} error={errors.newName} />
							</div>
						</div>
						<div className=' mb-3 mt-2 w-1/3 overflow-hidden rounded-xl bg-primary text-base hover:bg-secondary lg:w-1/4'>
							<SubmitButton textColor='text-white' isSubmitting={isSubmitting}>Save</SubmitButton>
						</div>
					</motion.form>
				)}
			</AnimatePresence>
		</div>
	)
}
