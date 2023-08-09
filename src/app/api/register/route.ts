import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

import { connectMongoDb } from '@/lib/mongodb'
import User from '@/models/users'

export const POST = async (req: Request) => {
	try {
		const { name, email, password } = await req.json()
		const hashedPassword = await bcrypt.hash(password, 10)

		await connectMongoDb()
		await User.create({ name, email, password: hashedPassword })

		return NextResponse.json({ message: 'User registered' }, { status: 201 })
	} catch (error) {
		return NextResponse.json({ message: 'An error occured while registering the user' }, { status: 500 })
	}
}
