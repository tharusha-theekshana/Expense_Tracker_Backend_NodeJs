import express from 'express';
import errorHandler from "./handlers/errorHandler.js";

const app = express();

// Use json
app.use(express.json());

//Use error handler
app.use(errorHandler);

//App server create
app.listen(8000,() => {
    console.log("Server started on port " + 8000);
})