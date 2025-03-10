import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoute from './routes/index.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.use("/api/products", productRoute)

app.listen(PORT, () => {
    connectDB();
    console.log(`Server live on http://localhost:${PORT}`)
});