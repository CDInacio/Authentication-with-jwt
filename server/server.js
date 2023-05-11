import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import { dbConnection } from "./src/config/db.js";
import { taskRoutes } from "./src/routes/task.js";
import { userRoutes } from "./src/routes/user.js";
const app = express();

dbConnection();
app.use(cors());

app.use(express.json());

app.use("/user", userRoutes);
app.use("/task", taskRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
