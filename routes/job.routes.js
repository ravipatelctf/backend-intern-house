// File imports
const { createJob, getAllJobs, getJobById, deleteJobById } = require("../controllers/job.controllers");

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

// Read by Id
router.get("/:jobId", getJobById);

// Update


// Delete
router.delete("/:jobId", deleteJobById);

// exports
module.exports = router;