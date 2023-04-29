const asyncHandler = require("express-async-handler");

//get all goals
//routes  GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

//create a goal
//routes  POST /api/goals
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter a text feild");
  }
  console.log("sdf");
  res.status(200).json({ message: "create a goal" });
});

//update a goal
//routes  PUT /api/goals/:id
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update a goal ${req.params.id}` });
});

//delete a goal
//routes  DELETE /api/goals/:id
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete a goal ${req.params.id}` });
});

module.exports = { getGoals, createGoal, updateGoals, deleteGoals };

//async wait handle karanna api try catch block eka use karanna one
//ehema karanna eka venuwata thama async-handler module eka download karanne
