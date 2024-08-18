import mongoose from "mongoose";

const userDashboard = async (req,res) => {

    const usersModel = mongoose.model("users");

    const getUser = await usersModel.findOne({
        _id : req.user._id,
    }).select("-password -__v -_id")

    res.status(200).json({
        status: "Hello from userDashboard!",
        data: getUser
    });
}

export default userDashboard;