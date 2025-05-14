const { Router } = require("express");
const userRouter = Router();
userRouter.post("/sigup", (req, res) => {
  res.json({
    message: "Signup endpoint",
  });
});

userRouter.post("/signin", (req, res) => {
  res.json({
    message: "Signin endpoint",
  });
});
userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "Purchases endpioint",
  });
});
module.exports = {
  userRouter,
};
