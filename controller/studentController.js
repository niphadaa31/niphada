const studentModel = require("../models/studentModel");

const handleGreeting = (req, res) => {
    res.send("Hello, Lap-Top API");
};

const handleGetStudents = (req, res) => {
    const studentsdata = studentModel.getAllStudents();
    res.json(studentsData);
};

const studentController = {
    handleGreeting,
    handleGetStudents,
};

module.exports = studentController;