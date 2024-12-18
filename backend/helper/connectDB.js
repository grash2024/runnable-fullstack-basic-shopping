import mongoose from "mongoose";

async function connectDB(url) {
	try {
		await mongoose.connect(url);
		console.log("successfully connected to mongodb");
	} catch (err) {
		console.log("failed to connect mongodb");
	}
}
export default connectDB;
