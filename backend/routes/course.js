const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "Buying course endpoit",
  });
});
courseRouter.post("/preview", (req, res) => {
  res.json({
    message: "course previw endpt",
  });
});

module.exports = {
  courseRouter,
};
