import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
	},
	category: {
		type: String,
		required: [true, "Category is required"],
	},
	price: {
		type: Number,
		required: [true, "Price is required"],
	},
	image: {
		type: String,
		required: [true, "Image is required"],
	},
	desc: {
		type: String,
		required: [true, "description is required"],
	},
});
export default mongoose.model("product", ProductSchema);
