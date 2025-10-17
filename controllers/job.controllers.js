// File imports
const { Job } = require("../models/job.models");

// Package imports

// Create job
const createJob = async (req, res) => {
    const { jobTitle, companyName, location, salary, jobType, jobDescription, jobQualifications } = req.body;
    try {
        const newJob = new Job({ jobTitle, companyName, location, salary, jobType, jobDescription, jobQualifications });
        await newJob.save();
        res.status(201).json({message: "Job created successfully.", data: newJob});
    } catch (error) {
        res.status(500).json({message: "Failed to create job", error})
    }
}

// Get all jobs
const getAllJobs = async (req, res) => {
    try {
        const allJobs = await Job.find();
        if (!allJobs) {
            return res.status(404).json({message: "Jobs not found."});
        }
        res.status(200).json({message: "Data fetched successfully", data: allJobs});
    } catch (error) {
        res.status(500).json({message: "Failed to fetch all jobs", error});
    }
}

module.exports = { createJob, getAllJobs };