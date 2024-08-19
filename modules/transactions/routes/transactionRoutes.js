import express from "express";
import auth from "../../../middleware/auth.js";
import addIncome from "../controller/addIncome.js";
import addExpense from "../controller/addExpense.js";
import getTransactions from "../controller/getTransactions.js";
import deleteTransaction from "../controller/deleteTransaction.js";


const transactionRoutes = express.Router();

transactionRoutes.use(auth);

// Routes...
transactionRoutes.post("/addIncome", addIncome);

transactionRoutes.post("/addExpense", addExpense);

transactionRoutes.get("/",getTransactions);

transactionRoutes.delete("/:transaction_id", deleteTransaction);

export default transactionRoutes;
