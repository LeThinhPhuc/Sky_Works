import express from 'express';
import jobController from '../controllers/jobController';
import authMdw from '../middlewares/authMdw';
const router = express.Router();

// API Get All Job
router.get("/", jobController.fetchAllJob)

// API Get a Job
router.get("/:id", jobController.fetchJob);

// API Create New Job
router.post("/", authMdw.authMdw, authMdw.inditerMdw, jobController.createJob);

// API Update Job
router.put("/:id", authMdw.authMdw, authMdw.inditerMdw, jobController.updateJob);

// API Delete Job
router.delete("/:id", authMdw.authMdw, authMdw.inditerMdw, jobController.deleteJob);

export default router;