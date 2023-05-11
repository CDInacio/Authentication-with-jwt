import { Router } from "express";
import { AuthController } from "../controllers/authController.js";
import { isAuth } from "../middlewares/auth.js";

export const userRoutes = Router();

userRoutes.get("/", isAuth, new AuthController().getUserInfo);
userRoutes.post("/signup", new AuthController().signup);
userRoutes.post("/login", new AuthController().login);
