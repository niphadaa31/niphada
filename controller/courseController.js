const courseModel = require("../models/courseModel");

const handleGreeting = (req, res) => {
    res.send("Hello, Lap-Top API"); 
};
 
const handleGetCourses = (req, res) => {
    const courses= courseModel.getAllCourses();
    res.status(200).json(course)
};

const courseController = {
    handleGreeting,
    handleGetCourses,
};

module.exports = courseController;
