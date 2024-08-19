import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import emailManager from "../../../managers/emailManager.js";
import jwtManager from "../../../managers/jwtManager.js";

const userRegister = async (req, res) => {
    const usersModel = mongoose.model("users");

    const {email, password, confirm_password, name, balance} = req.body;

    // validations...
    if (!email) throw "Email is required !";
    if (!password) throw "Password is required !";
    if (password.length < 5) throw "Password must be at least 5 characters long.";
    if (!confirm_password) throw "Confirm password is required !";
    if (confirm_password.length < 5) throw "Confirm password must be at least 5 characters long.";
    if (!name) throw "Name is required !";
    if (password !== confirm_password)
        throw "Password and confirmed password does not match !";
    if (!balance) throw "Balance must be provided !"

    const getDuplicateEmail = await usersModel.findOne({
        email: email,
    });

    if (getDuplicateEmail) throw "This email already exists !";

    const hashedPassword = await bcrypt.hash(password, 12);

    const createdUser = await usersModel.create({
        name: name,
        email: email,
        password: hashedPassword,
        balance: balance,
    });


    const accessToken = jwtManager(createdUser);

    await emailManager(
        createdUser.email,
        "Welcome to expense tracker PRO. We hope you can manage your expenses easily from our platform!",
        "<h1>Welcome to expense tracker PRO.</h1> <br/><br/> We hope you can manage your expenses easily from our platform!",
        "Welcome to Expense Tracker PRO!"
    );


    res.status(201).json({
        status: "User registered successfully!",
        accessToken: accessToken
    });
};

export default userRegister;