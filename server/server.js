import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db.js';
import productRoute from './routes/index.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

const __dirname = path.resolve();

app.use(express.json());
app.use(cors());

app.use("/api/products", productRoute)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
    })
}

app.listen(PORT, () => {
    connectDB();
    console.log(`Server live on http://localhost:${PORT}`)
});