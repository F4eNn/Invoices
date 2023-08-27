import isEmail from 'validator/lib/isEmail'

const containsSpecialChar = /(?=.*\W)/
const containsCapitalLetter = /(?=.*[A-Z])/

export const nameValidation = {
	required: 'Name is required',
	validate: {
		minLength: (value: string) => value.trim().length >= 3 || 'Use a minimum of 3 characters.',
		maxLength: (value: string) => value.trim().length <= 12 || 'Use a maximum of 12 characters.',
		hasSpecialChar: (username: string) => {
			// eslint-disable-next-line quotes
			return !containsSpecialChar.test(username) || "Name can't contain special characters"
		},
	},
}

export const emailValidation = {
	required: 'Email is required',
	validate: (value: string) => isEmail(value) || 'Provide valid e-mail',
}

export const passwordValidation = {
	required: 'Password is required',
	minLength: {
		value: 6,
		message: 'Use a minimum of 6 characters.',
	},
	maxLength: {
		value: 20,
		message: 'Use a maximum of 20 characters.',
	},
	validate: {
		hasBigLetter: (password: string) => containsCapitalLetter.test(password) || 'Atleast one capital letter',
		hasSpecialChar: (password: string) => containsSpecialChar.test(password) || 'Atleast one special character.',
	},
}
export const generalInvoiceValidation = {
	// eslint-disable-next-line quotes
	required: "Can't be empty",
	validate: {
		minLength: (value: string) => value.trim().length > 0 || 'Can\'t be empty',
	},
}
export const numberValidation = {
	required: true,
	min: 1,
}
