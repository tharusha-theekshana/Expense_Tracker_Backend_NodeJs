import mongoose from "mongoose";

const transactionsSchema = new mongoose.Schema({
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: [true, "User id is required."],
        },
    
        amount: {
            type: Number,
            required: true,
        },

        transaction_type: {
            type: String,
            required: true,
            enum: ["income", "expense"],
        },

        remarks: {
            type: String,
            required: true,
        },
    }, {timestamps: true}
);

const transactionModel = mongoose.model("transactions", transactionsSchema);

export default transactionModel;
