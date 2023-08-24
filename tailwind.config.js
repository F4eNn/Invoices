/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
	],
	darkMode: 'class',
	theme: {
		extend: {
			boxShadow: {
				topShadow: '0px 0px 100px rgba(92, 92, 92, 0.25)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#7C5DFA',
				secondary: '#9277FF',
				primaryDark: '#1E2139',
				secondaryDark: '#252945',
				rose: '#DFE3FA',
				gray: '#888EB0',
				grayPurple: '#7E88C3',
				black: '#0C0E16',
				red: '#EC5757',
				lightRed: '#ff9797',
				lightGray: '#F8F8FB', 
				lightGreen: '#33D69F', 
				orange: '#FF8F00',
				darkGray: '#373b53',
				lightDark: '#141625',
				grayishWhite: '#e3e3e3',
			},
			fontSize: {
				headingL: [
					'2.5rem',
					{
						fontWeight: 'bold',
						lineHeight: '38px',
						letterSpacing: '-1px',
					},
				],
				headingM: [
					'2rem',
					{
						fontWeight: 'bold',
						lineHeight: '28px',
						letterSpacing: '-0.75px',
					},
				],
				headingS: [
					'1.5rem',
					{
						fontWeight: 'bold',
						lineHeight: '24px',
						letterSpacing: '-0.25px',
					},
				],
				headingSVariant: [
					'1.1rem',
					{
						fontWeight: 'bold',
						lineHeight: '15px',
						letterSpacing: '-0.25px',
					},
				],
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class',
		}),
	],
}
