import Job from "../models/job.js";

export const saveJobData = async (req, resp) => {
    try{
        const newJob = new Job(req.body)
        await newJob.save();
        resp.status(200).json({message: "Job saved successfully"});
    }catch(error){
        console.error(error.message);
        resp.status(500).json({error: error.message});
    }
}

export const getJobData = async (req, resp) => {
    try{
        const jobs = await Job.find({});
        resp.status(200).json(jobs);
    }catch(error){
        console.error(error.message);
        resp.status(500).json({error: error.message});
    }
}