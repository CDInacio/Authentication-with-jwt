const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

dbConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongodb!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
