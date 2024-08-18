import express from "express";
import userRegister from "../controller/userRegister.js";
import userLogin from "../controller/userLogin.js";
import userDashboard from "../controller/userDashboard.js";
import auth from "../../../middleware/auth.js";
import forgotPassword from "../controller/forgotPassword.js";

const userRoutes = express.Router();

// Routes...
userRoutes.post("/register", userRegister);

userRoutes.post("/login", userLogin);

userRoutes.post("/forgotPassword",forgotPassword);

userRoutes.use(auth);

userRoutes.get("/dashboard", userDashboard);


export default userRoutes;
