import express from "express";
import {
	getProductById,
	getProducts,
} from "../controllers/products.controller.js";

const productsRouter = express.Router();
productsRouter.route("/products").get(getProducts);
productsRouter.get("/product/:id", getProductById);
export default productsRouter;
