import React from 'react'
import { useForm } from 'react-hook-form'
import { FiEdit } from 'react-icons/fi'

import { useAuth } from '@/hooks/useAuth'
import { useToggle } from '@/hooks/useToggle'
import { InputWrapper } from '../ui/Forms/InputWrapper'
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

	const { register, handleSubmit, formState, reset } = useForm<FormValue>({
		defaultValues: {
			newName: '',
		},
	})
	const { errors, isSubmitting } = formState

	const onUpdateNameHandler = async (data: FormValue) => {
		updateUserInfo({ name: data.newName })
		toggleForm()
		reset()
		notify('Name updated')
	}

	return (
		<div className='flex-1 flex flex-col items-end'>
			<button
				onClick={toggleForm}
				className='text-2xl p-2 text-primary hover:scale-125 hover:text-secondary transition-all '>
				<FiEdit />
			</button>
			<AnimatePresence>
				{updateName && (
					<motion.form
						{...formAnimation}
						onSubmit={handleSubmit(onUpdateNameHandler)}
						className='flex-1 gap-5 w-3/4 mt-8 anim'>
						<InputWrapper>
							<CredentialInput
								label={user?.name}
								className='w-3/4'
								placeholder='New name'
								{...register('newName', { ...nameValidation })}
							/>
							<ErrorMessage
								msg={errors.newName?.message}
								error={errors.newName}
							/>
						</InputWrapper>
						<div className='flex w-1/4 mt-2'>
							<SubmitButton isSubmitting={isSubmitting}>Save</SubmitButton>
						</div>
					</motion.form>
				)}
			</AnimatePresence>
		</div>
	)
}
