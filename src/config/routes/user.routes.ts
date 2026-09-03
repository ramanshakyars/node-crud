import express from "express";
import * as userController from "../controller/user.controller";

const router = express.Router();

router.get("/get",userController.getUser);
router.post("/create",userController.createUser);

export default router;