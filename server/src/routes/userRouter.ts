import express from 'express';
import UserAdmin from './users';
import Login from './login'
import Register from './register'

const router = express.Router();

//API User Admin ... http://localhost:8001/admin/users
router.use('/users', UserAdmin)

// API login, authenticator ... http://localhost:8001/admin/login
router.use('/login', Login);

//API Register ... http://localhost:8001/admin/register
router.use('/register', Register);

export default router;
