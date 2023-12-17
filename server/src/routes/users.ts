import express from 'express';
import userAdminController from '../controllers/userAdminController';
import authMdw from '../middlewares/authMdw';
const router = express.Router();


//MiddleWares
router.use(authMdw.authMdw, authMdw.adminMdw)

// API Get ALl User Admin
router.get("/", userAdminController.fetchAllUser)

//API Get User
router.get("/:id", userAdminController.fetchUser);

//API Update Information User
router.put("/:id", userAdminController.updateIn4User);

//API Delete User Admin
router.delete("/:id", userAdminController.deleteUser);

export default router;