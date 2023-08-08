import mongoose from 'mongoose'

export const connectMongoDb = async () => {
	try {
		if (!process.env.MONGODB_URI) return
		await mongoose.connect(process.env.MONGODB_URI)
	} catch (error) {
		console.error('Error connecting to MongoDB: ', error)
	}
}
