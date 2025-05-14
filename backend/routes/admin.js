const { Router } = require("express");
const adminRouter = Router();
adminRouter.post("/sigup", (req, res) => {
  res.json({
    message: "Signup endpoint",
  });
});

adminRouter.post("/signin", (req, res) => {
  res.json({
    message: "Signin endpoint",
  });
});
adminRouter.get("/purchases", (req, res) => {
  res.json({
    message: "Purchases endpioint",
  });
});
adminRouter.get("/create-course", (req, res) => {
  res.json({
    message: "Purchases endpioint",
  });
});
adminRouter.get("/edit-course", (req, res) => {
  res.json({
    message: "Purchases endpioint",
  });
});
adminRouter.get("/course/bulk", (req, res) => {
  //get course bulk which created
  res.json({
    message: "Purchases endpioint",
  });
});
module.exports = {
  adminRouter,
};
