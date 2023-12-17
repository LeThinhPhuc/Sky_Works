import Job from "../models/jobs.model";
import validationMongoId from "../helper/validationMongoId";

const fetchAllJob = async (req: any, res: any) => {
  try {
    const jobs = await Job.find();

    if (!jobs) {
      res.status(404).json({
        message: "Not Found",
      });
    }

    res.json({
      message: "Success Get All Jobs",
      data: jobs,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const fetchJob = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const isValid = validationMongoId(id);

    if (!isValid) {
      res.status(404).json({
        message: 'Job not valid',
      });
    }

    const job = await Job.findById(id);

    if (!job) {
      res.status(404).json({
        message: "Not Found",
      });
    }

    res.json({
      message: "Success Get Job",
      data: job,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const createJob = async (req: any, res: any) => {
  try {
    const { title } = req.body;

    // kiem tra title da ton tai chua
    const existingTitle = await Job.findOne({ title });

    if (existingTitle) {
      return res.status(400).json({
        message: 'Applications exists',
      });
    }

    const job = new Job(req.body);

    await job.save();

    const newDataJob = await Job.find();

    res.json({
      message: "Success Create New Job",
      newData: newDataJob,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const updateJob = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const isValid = validationMongoId(id);

    if (!isValid) {
      res.status(404).json({
        message: 'Job not valid',
      });
    }
    const existingJob = await Job.findById(id);

    if (!existingJob) {
      return res.status(400).json({
        message: 'Job not exists',
      });
    }

    await Job.findByIdAndUpdate(id, req.body);
    const newDataJob = await Job.find();

    res.json({
      message: "Success Update Job",
      newData: newDataJob,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

const deleteJob = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const isValid = validationMongoId(id);
    if (!isValid) {
      res.status(404).json({
        message: 'Job not valid',
      });
    }

    await Job.findByIdAndDelete(id);
    const newDataJob = await Job.find();

    res.json({
      message: "Success Delete Job",
      newData: newDataJob,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.toString(),
    });
  }
};

export default { fetchAllJob, fetchJob, createJob, updateJob, deleteJob };
