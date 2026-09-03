import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import db = require("./db");

const PORT = process.env.PORT || 5000;



const startServer = async () => {

    await db.connectDb();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();
