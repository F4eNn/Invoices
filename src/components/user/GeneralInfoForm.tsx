import React from 'react'
import { useForm } from 'react-hook-form'
import { FiEdit } from 'react-icons/fi'
import { IoCloseSharp } from 'react-icons/io5'

import { useAuth } from '@/hooks/useAuth'
import { useToggle } from '@/hooks/useToggle'
import { CredentialInput } from './Account'
import { nameValidation } from '../register/formValidation'
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
		<div className='flex-1 flex flex-col  md:items-end mb-5 '>
			<button
				onClick={toggleForm}
				className='text-3xl p-2 text-primary hover:text-secondary transition-all mb-5'>
				{updateName ? <IoCloseSharp /> : <FiEdit />}
			</button>
			<AnimatePresence>
				{updateName && (
					<motion.form
						{...formAnimation}
						onSubmit={handleSubmit(onUpdateNameHandler)}
						className='flex flex-col w-full md:items-end'>
						<div className='md:flex md:flex-col md:items-end w-full'>
							<CredentialInput
								label={user?.name}
								className='w-3/4'
								placeholder='New name'
								{...register('newName', { ...nameValidation })}
							/>
							<div className='w-3/4'>
								<ErrorMessage
									msg={errors.newName?.message}
									error={errors.newName}
								/>
							</div>
						</div>
						<div className=' w-1/3 lg:w-1/4 mt-2 mb-3'>
							<SubmitButton isSubmitting={isSubmitting}>Save</SubmitButton>
						</div>
					</motion.form>
				)}
			</AnimatePresence>
		</div>
	)
}
