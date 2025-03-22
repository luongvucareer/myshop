import express, { Request, Response } from "express";
import User from "../models/User";
import { adminOnly, protect } from "../middleware/authMiddleware";

const router = express.Router();

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
router.get("/", protect, adminOnly, async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// @desc    Update user role
// @route   PUT /api/users/:id
// @access  Private/Admin
router.put("/:id", protect, adminOnly, async (req: Request, res: Response) => {
  try {
    const { role } = req.body;
    if (!["user", "admin"].includes(role)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.role = role;
    await user.save();

    res.json({ message: "User role updated", user });
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
});

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  Private/Admin
router.delete(
  "/:id",
  protect,
  adminOnly,
  async (req: Request, res: Response) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ error: "User not found" });

      await user.deleteOne();
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete user" });
    }
  }
);
