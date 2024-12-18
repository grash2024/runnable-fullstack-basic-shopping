import Product from "../models/products.model.js";

const getProducts = async (req, res, next) => {
	try {
		const product = await Product.find({});
		res.status(200).json(product);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
const getProductById = async (req, res, next) => {
	const { id } = req.params;
	try {
		const product = await Product.findById(id);
		res.status(200).json(product);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
export { getProducts, getProductById };
