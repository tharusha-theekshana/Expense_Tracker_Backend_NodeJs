import "express-async-errors";
import express from 'express';
import errorHandler from "./handlers/errorHandler.js";
import dotenv from "dotenv";
import database_connection from "./connection/database_connection.js";
import userRoutes from "./modules/user/routes/userRoutes.js";


const app = express();

// Models initialization
import "./models/User.js"
import "./models/Transaction.js"
//Env configure
dotenv.config();

//Use database connection
database_connection();

// Use json
app.use(express.json());

//Routes
app.use("/api/users",userRoutes);

//Use error handler
app.use(errorHandler);

//App server create
app.listen(process.env.PORT,() => {
    console.log("Server started on port " + process.env.PORT);
})