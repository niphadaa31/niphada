const express = require("express");
const todotrackerController = require("../controller/todotrackerController");
const studentController = require("../controller/studentController");
const courseContorller = require("../controller/courseController");
const apiRouter = express.Router();

apiRouter.get("/", todotrackerController.handleGreeting);

apiRouter.get("/todotrackers", todotrackerController.handleGetTodotrackers);
apiRouter.get("/students", studentController.handleGetStudents);
apiRouter.get("/courses", courseContorller.handleGetCourses);

module.exports = apiRouter;