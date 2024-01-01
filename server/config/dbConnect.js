const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pandeynaveencsjmu2020:0NVCh5nbw2FVzeph@naveen.mo1i5u5.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Mongo DB Connection Successfull");
  } catch (error) {
    console.log("Mongo DB Connection Failed");
    console.log(error);
  }
};

module.exports = dbConnect;
