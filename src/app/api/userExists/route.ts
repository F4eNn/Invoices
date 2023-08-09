import { NextResponse } from 'next/server'

import { connectMongoDb } from '@/lib/mongodb'
import User from '@/models/users'

export const POST = async (req: Request) => {
	try {
		await connectMongoDb()
		const { email } = await req.json()
		const user = await User.findOne({ email }).select('_id')
		return NextResponse.json({ user })
	} catch (error) {
		console.error(error)
	}
}
