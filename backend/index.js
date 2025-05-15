const express = require("express");
require("dotenv").config();
const app = express();
const { userRouter } = require("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");
const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/course", adminRouter);

async function main() {
  await mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
      family: 4, // Forces IPv4 (some ISPs have IPv6 issues)
    })
    .then(() => {
      console.log("Db connected!!");
    })
    .catch((err) => {
      console.log("Unable to connect to db " + err);
    });
  app.listen(3000, () => {
    console.log("App is running on port 3000");
  });
}
main();
