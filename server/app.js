require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/user");
const dbConnection = require("./config/db");

dbConnection();

app.use(cors());

app.use(express.json());

app.use("/user", userRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
