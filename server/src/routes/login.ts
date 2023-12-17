import express from 'express';
import loginController from '../controllers/loginController';
const router = express.Router();

// API Login
router.post("/", loginController.loginUser);

export default router;