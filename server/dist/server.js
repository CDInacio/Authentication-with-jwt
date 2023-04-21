"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const user_1 = require("./routes/user");
const db_1 = require("./config/db");
(0, db_1.dbConnection)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/user", user_1.userRoutes);
app.listen(5000, () => {
    console.log("Server started on port 5000");
});
