const todotrackerModel = require("../models/todotrackerModel");

const handleGreeting = (req, res) => {
    res.send("Todo Tracker API");
};

const handleGetTodotrackers = (req, res) => {
    const todotrackerData = todotrackerModel.getAllTodotrackers();
    res.json(todotrackerData);
};

const todotrackerController = {
    handleGreeting,
    handleGetTodotrackers,
};

module.exports = todotrackerController;