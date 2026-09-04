import express from "express";
import * as userController from "../controllers/user.controller";

const router = express.Router();

router.get("/get",userController.getUser);
router.post("/create",userController.createUser);
router.put("/update/:id",userController.updateUser);
router.delete("/delete/:id",userController.deleteUser);

export default router;