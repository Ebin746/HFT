const mongoose = require("mongoose");

const dataBaseConnection = async () => {
  try {
    let base = await mongoose.connect("mongodb://localhost:27017/HTF");
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dataBaseConnection;