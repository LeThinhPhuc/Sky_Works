import express from 'express';
import userAdminController from '../controllers/userAdminController';
const router = express.Router();

// API Register User
router.post("/", userAdminController.registerUser);

export default router;