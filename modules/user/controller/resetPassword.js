import mongoose from "mongoose";
import bcrypt from "bcrypt";
import emailManager from "../../../managers/emailManager.js";

const resetPassword = async (req, res) => {
    const usersModel = mongoose.model("users");

    const { email, new_password, reset_code } = req.body;

    if (!email) throw "Email is required";
    if (!new_password) throw "Please provide new password!";
    if (!reset_code) throw "Reset code is required!";
    if (new_password.length < 5)
        throw "Password must be at least 5 characters long!";

    const getUserWithResetCode = await usersModel.findOne({
        email: email,
        reset_code: reset_code,
    });

    if (!getUserWithResetCode) throw "Reset code does not match!";

    const hashedPassword = await bcrypt.hash(new_password, 12);

    await usersModel.updateOne(
        {
            email: email,
        },
        {
            password: hashedPassword,
            reset_code: "",
        },
        {
            runValidators: true,
        }
    );

    await emailManager(
        email,
        "Your password is reseted successfully! If you have not done that, please contact us!",
        "Your password is reseted successfully! If you have not done that, please contact us!",
        "Password reset successfully!"
    );

    res.status(200).json({
        status: "success",
        message: "Password reseted succesfully!",
    });
};

export default resetPassword;
