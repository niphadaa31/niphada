const dataTodotrackers = [
    {id: 42, 
     title: "prepare the slide", 
     priority: "Hight", 
     deadline: "2025-11-01T23:59:59z",}
];

const todotrackerModel = {
    getAllTodotrackers : () => dataTodotrackers,
};

module.exports = todotrackerModel;