import mongoose from "mongoose";

const getTransactions = async (req, res) => {
    const transactionModel = mongoose.model("transactions");

    console.log(req.query);

    const transactions = await transactionModel.find({
        user_id: req.user._id,
        ...req.query,
    });

    res.status(200).json({
        status: "success",
        data: transactions,
    });
};

export default getTransactions;