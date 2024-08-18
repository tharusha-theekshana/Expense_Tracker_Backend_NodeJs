import express from "express";
import auth from "../../../middleware/auth.js";
import addIncome from "../controller/addIncome.js";
import addExpense from "../controller/addExpense.js";


const transactionRoutes = express.Router();

transactionRoutes.use(auth);

// Routes...
transactionRoutes.post("/addIncome", addIncome);

transactionRoutes.post("/addExpense", addExpense);



export default transactionRoutes;
