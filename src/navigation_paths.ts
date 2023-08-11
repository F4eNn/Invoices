type NavigationItem = {
	path: string
	label: string
}
export const navigation = {
	home: {
		path: '/',
		label: 'home',
	},
	login: {
		path: 'register?mode=login',
		label: 'login',
	},
	signUp: {
		path: 'register?mode=signup',
		label: 'sign up',
	},
} as const satisfies Record<PropertyKey, NavigationItem>
