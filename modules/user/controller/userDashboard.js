import mongoose from "mongoose";
import transactionModel from "../../../models/Transaction.js";

const userDashboard = async (req,res) => {

    const usersModel = mongoose.model("users");

    const getUser = await usersModel.findOne({
        _id : req.user._id,
    }).select("-password -__v -_id")

    const transactions = await transactionModel
        .find({
            user_id: req.user._id,
        })
        .sort("-createdAt")
        .limit(5);

    res.status(200).json({
        status: "Hello from userDashboard!",
        data: getUser,
        transactions,
    });
}

export default userDashboard;