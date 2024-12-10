import { Router } from "express";
import signUpController from "../contollers/user-controller/signup/index.js";
import loginController from "../contollers/user-controller/login/index.js";
import logoutController from "../contollers/user-controller/logout/index.js";
import verfiyLogin from "../contollers/user-controller/verifyLogin/index.js";
import authMiddleware from "../middleware/Authriozation_middleware.js";

const router = Router();

router.post("/signup", signUpController);
router.post("/login", loginController);
router.get("/logout", logoutController);
router.get("/verifyLogin", authMiddleware, verfiyLogin);

export default router;
