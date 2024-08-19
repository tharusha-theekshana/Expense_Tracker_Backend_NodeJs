import mongoose from "mongoose";

const database_connection = () => {
    mongoose.connect(process.env.CONNECTION_URL, {})
        .then(() => {
            console.log("Database connection successful.")
        }).catch(() => {
        console.log("Database connection failed.")
    });
}

export default database_connection;