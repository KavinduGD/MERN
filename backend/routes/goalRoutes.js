const express = require("express");
const router = express.Router();
const {
  getGoals,
  createGoal,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(createGoal);

router.route("/:id").put(updateGoals).delete(deleteGoals);

module.exports = router;
