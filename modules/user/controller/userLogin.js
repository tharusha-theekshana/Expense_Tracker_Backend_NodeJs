import mongoose from "mongoose";
import bcrypt from "bcrypt";
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

    res.status(200).json({
        status: "success",
        message: "User logged in successfully!",
    });
};

export default userLogin;