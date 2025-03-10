import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

export const connectDB = async (req, res) => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error("Mongoose Server connection Error: ", error)
        res.status(500).json({ success: false, message: `Mongoose Server connection Error: ${error.message}` })
        process.exit(1);
    }
}