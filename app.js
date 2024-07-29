import express from 'express';


const app = express();

//App server create
app.listen(8000,() => {
    console.log("Server started on port " + 8000);
})