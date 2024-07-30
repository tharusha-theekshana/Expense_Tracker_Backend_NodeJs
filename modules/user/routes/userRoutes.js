import express from "express";
import userRegister from "../controller/userRegister.js";
import userLogin from "../controller/userLogin.js";
import userDashboard from "../controller/userDashboard.js";

const userRoutes = express.Router();

// Routes...
userRoutes.post("/register", userRegister);

userRoutes.post("/login", userLogin);

userRoutes.get("/dashboard", userDashboard);


export default userRoutes;
