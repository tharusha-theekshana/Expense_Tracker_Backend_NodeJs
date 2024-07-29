import express from "express";
import userRegister from "../controller/userRegister.js";

const userRoutes = express.Router();

// Routes...
userRoutes.post("/register", userRegister);

export default userRoutes;
