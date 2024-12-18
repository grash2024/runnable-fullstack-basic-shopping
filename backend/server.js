import express from "express";
const app = express();
import dotenv from "dotenv";
import productsRouter from "./routers/products.router.js";
import connectDB from "./helper/connectDB.js";
dotenv.config();
const port = process.env.PORT_NO;
const url = process.env.MONGODB_URL;
app.use("/api", productsRouter);
app.use("/auth", authRouter);
app.listen(port, () => {
	connectDB(url);
	console.log("connected to port", port);
});
