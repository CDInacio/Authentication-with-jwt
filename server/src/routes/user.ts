import { Router } from "express";
import { AuthController } from "../controllers/authController";
import { isAuth } from "../middlewares/auth";

export const userRoutes = Router()

userRoutes.post("/signup", new AuthController().signup);
userRoutes.post("/login", new AuthController().login);
userRoutes.get("/", isAuth, new AuthController().getUserInfo);
