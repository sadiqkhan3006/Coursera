const express = require("express");
const app = express();
const { userRouter } = require("./routes/user.js");
const { courseRouter } = require("./routes/course.js");
const { adminRouter } = require("./routes/admin.js");
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/course", adminRouter);
app.listen(3000, () => {
  console.log("App is running on port 3000");
});
