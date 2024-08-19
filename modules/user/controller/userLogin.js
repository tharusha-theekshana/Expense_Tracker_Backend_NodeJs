import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import jwtManager from "../../../managers/jwtManager.js";
const userLogin = async (req, res) => {
    const usersModel = mongoose.model("users");

    const { email, password } = req.body;

    if (!email) throw "Email is required !";
    if (!password) throw "Password is required !";

    const getUser = await usersModel.findOne({
        email: email,
    });

    if (!getUser) throw "This email is not registered !";

    const comparePassword = await bcrypt.compare(password, getUser.password);

    if (!comparePassword) throw "Email and password do not match!";

    const accessToken = jwtManager(getUser);

    res.status(200).json({
        status: "success",
        message: "User logged in successfully!",
        accessToken : accessToken,
    });
};

export default userLogin;