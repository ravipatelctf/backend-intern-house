const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

async function initializeDatabase() {
    await mongoose
        .connect(process.env.MONGODB)
        .then(() => {
            console.log("Connected to database successfully.");
        })
        .catch((error) => {
            console.error("Failed to connected to database:", error);
        })
}

module.exports = { initializeDatabase };