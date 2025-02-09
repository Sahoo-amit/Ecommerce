import express from "express";
import cors from 'cors'
import { config } from "dotenv";
import {connectDB} from "./utils/db.js";
import userRouter from "./routes/authRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRouter.js";
config()

const app = express();

app.use(cors())
app.use(express.json())
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/cart', cartRouter)
app.use('/orders', orderRouter)

app.listen(3000, ()=>{
    console.log(`Server is running on port 3000`);
    connectDB()
})