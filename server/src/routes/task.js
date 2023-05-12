import { Router } from "express";
import { TaskController } from "../controllers/taskController.js";
import { isAuth } from "../middlewares/auth.js";

export const taskRoutes = Router();

taskRoutes.get("/", isAuth, new TaskController().getTasks);
taskRoutes.post("/add", isAuth, new TaskController().postTask);
