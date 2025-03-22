import express, { Request, Response } from "express";
import Category from "../models/Category";

const router = express.Router();

// @desc    Fetch all categories
// @route   GET /api/categories
// @access  Public
router.get("/", async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});

// @desc    Add a new category
// @route   POST /api/categories
// @access  Private
router.post("/", async (req: Request, res: Response) => {
  try {
    const name = req.body?.name?.trim().toLowerCase();

    if (!name) {
      return res.status(400).json({ error: "Invalid category name" });
    }

    // Ensure uniqueness
    const categoryExists = await Category.findOne({ name });
    if (categoryExists) {
      return res.status(400).json({ error: "Category already exists" });
    }

    // Create and save new category
    const category = new Category({ name });
    await category.save();

    res.status(201).json(category);
  } catch (error) {
    console.error("Error adding category:", error);
    res
      .status(500)
      .json({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
  }
});

export default router;
