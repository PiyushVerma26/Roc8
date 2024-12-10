import { Router } from "express";

import authMiddleware from "../middleware/Authriozation_middleware.js";
import getDataController from "../contollers/data_contoller/getDataController.js";
import postDataController from "../contollers/data_contoller/postDataController.js";

const router = Router();

router.get("/getData", authMiddleware, getDataController);

router.post("/postData", postDataController);

export default router;
