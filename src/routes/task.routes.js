import { Router } from "express";
import { createTask } from "../controllers/task.controllers.js"

const router = Router();

router.post('/task/create', createTask);

export default router