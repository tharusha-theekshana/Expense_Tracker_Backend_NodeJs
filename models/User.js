import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
    },

    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true,
    },

    password: {
        type: String,
        required: [true, "Password is required."],
    },

    balance: {
        type: Number,
        required: [true, "Balance is required."],
        default: 0,
    },
});

const usersModel = mongoose.model("users", usersSchema);

export default usersModel;
