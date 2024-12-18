import mongoose from "mongoose";
const UserModel = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
		minlength: [3, "Name should contain minimum 3 characters"],
		maxlenghth: [20, "Name should contain maximum 20 characters"],
	},
	email: {
		type: String,
		unique: [true, "Email already exits"],
	},
	// weak password for easier debugging
	password: {
		type: String,
		required: [true, "Password is required"],
		minlength: [3, "Password should contain minimum 3 characters"],
	},
});
export default mongoose.model("user", UserModel);
