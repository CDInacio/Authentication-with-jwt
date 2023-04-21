"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.post("/signup", authController_1.signup);
exports.userRoutes.post("/login", authController_1.login);
