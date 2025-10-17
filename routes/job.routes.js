// File imports
const { createJob, getAllJobs } = require("../controllers/job.controllers");

// Package imports
const express = require("express");


const router = express.Router();


// Middlewares
router.use(express.json());

// Job routes ------------------------

// Create
router.post("/", createJob);

// Read
router.get("/", getAllJobs);

// Update


// Delete


// exports
module.exports = router;