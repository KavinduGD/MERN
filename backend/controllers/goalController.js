//get all goals
//routes  GET /api/goals
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

//create a goal
//routes  POST /api/goals
const createGoal = (req, res) => {
  res.status(200).json({ message: "Create a goal" });
};

//update a goal
//routes  PUT /api/goals/:id
const updateGoals = (req, res) => {
  res.status(200).json({ message: `update a goal ${req.params.id}` });
};

//delete a goal
//routes  DELETE /api/goals/:id
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `delete a goal ${req.params.id}` });
};

module.exports = { getGoals, createGoal, updateGoals, deleteGoals };
