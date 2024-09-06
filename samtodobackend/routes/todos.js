const express = require("express");
const Todo = require("../models/Todo");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

// Get all todos for a specific user
router.get("/", authenticate, async (req, res) => {
  const { userId } = req.query;
  try {
    // Verify if the userId from query matches the authenticated user's ID
    if (userId !== req.user.userId) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const todos = await Todo.find({ userId });
    res.json(todos);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Create a new todo (protected route)
router.post("/", authenticate, async (req, res) => {
  const { text } = req.body;
  try {
    const todo = new Todo({
      userId: req.user.userId, // This is set by the authenticate middleware
      text,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
