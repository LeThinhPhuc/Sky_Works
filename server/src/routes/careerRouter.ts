import express from 'express';
import applyApp from "./Apply"
import jobs from './jobs'
const router = express.Router();
 
// API JOBS ... http://localhost:8001/careers/jobs
router.use('/jobs', jobs)
// API APPLICATIONS ... http://localhost:8001/careers/apply
router.use('/apply', applyApp);

export default router;
