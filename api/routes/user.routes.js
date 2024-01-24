import express from "express";
import { test, tests } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.get("/tester", tests);

export default router;
