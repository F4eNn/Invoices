import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import { NextAuthOptions } from 'next-auth'
import bcrypt from 'bcryptjs'

import User from '@/models/users'
import { connectMongoDb } from '@/lib/mongodb'

const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {},

			async authorize(credentials) {
				//@ts-ignore
				const { email, password } = credentials
				try {
					await connectMongoDb()
					const user = await User.findOne({ email })
					if (!user) {
						return null
					}
					const passwordMatch = await bcrypt.compare(password, user.password)
					if (!passwordMatch) {
						return null
					}
					return user
				} catch (error) {
					console.error(error)
				}
			},
		}),
	],
	session: { strategy: 'jwt' },
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/register?mode=login',
	},
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
