const express = require("express");
const router = express.Router();
const {
  getGoals,
  createGoal,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

//auth middleware
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, createGoal);

router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals);

module.exports = router;
