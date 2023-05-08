import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
import cors from "cors";
import { userRoutes } from "./src/routes/user.js";
import { dbConnection } from "./src/config/db.js";

dbConnection();
app.use(cors());

app.use(express.json());

app.use("/user", userRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
