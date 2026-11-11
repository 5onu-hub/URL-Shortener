const mongoose = require("mongoose");

async function connectMongoDB() {
    await mongoose.connect("mongodb://127.0.0.1:27017/url-shortner");
    console.log("mongooDB connect successfully...");
}

module.exports = {
  connectMongoDB,
};
