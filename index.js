// File imports
const { initializeDatabase } = require("./db/db.connect");
const jobRoutes = require("./routes/job.routes");

// Package imports
const express = require("express");
const cors = require("cors");

initializeDatabase();
const app = express();

// Middlewares
app.use(express.json());
const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Job routes
app.use("/jobs", jobRoutes);

// Home route
app.get("/", (req, res) => {
    res.status(200).json({message: "Welcome to Intern House REST API server"});
})

// Initialize express server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
})