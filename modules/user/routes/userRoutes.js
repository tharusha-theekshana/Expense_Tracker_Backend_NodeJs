import express from "express";
import userRegister from "../controller/userRegister.js";
import userLogin from "../controller/userLogin.js";

const userRoutes = express.Router();

// Routes...
userRoutes.post("/register", userRegister);

userRoutes.post("/login", userLogin);
export default userRoutes;
