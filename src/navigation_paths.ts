type NavigationItem = {
	path: string
	label?: string
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
	userProfile: {
		path: '?settings=profile',
	},
	userAccount: {
		path: '?settings=account'
	}
} as const satisfies Record<PropertyKey, NavigationItem>
