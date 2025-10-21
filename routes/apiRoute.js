const express = require("express");
const courseController = require("../controllers/courseController");
const apiRouter = express.Router();

//Root path: /
apiRouter.get("/", courseController.handleGreeting);

//Students path: /student
apiRouter.get("/courses", courseController.handleGetCourse);

module.exports = apiRouter;