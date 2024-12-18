import express from "express";
import { handleLogin, handleRegister } from "../controllers/users.controller";
const authRouter = express.Router();
authRouter.route("/signin").get(handleLogin);
authRouter.route("/signup").get(handleRegister);
export default authRouter;
