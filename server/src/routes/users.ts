import express from 'express';
import userAdminController from '../controllers/userAdminController';
import authMdw from '../middlewares/authMdw';
const router = express.Router();


//MiddleWares
// router.use(authMdw.authMdw, authMdw.adminMdw)

// API Get ALl User Admin
router.get("/", authMdw.authMdw, authMdw.adminMdw,userAdminController.fetchAllUser)

//API Get User By Email
router.get("/:email", userAdminController.fetchUserByEmail)

//API Get User
router.get("/:id",authMdw.authMdw, authMdw.adminMdw, userAdminController.fetchUser);


//API Update Information User
router.put("/:id", userAdminController.updateIn4User);

router.put("/updaterole/:id",userAdminController.updateInforUser)

//API Delete User Admin
router.delete("/:id",authMdw.authMdw, authMdw.adminMdw, userAdminController.deleteUser);

export default router;