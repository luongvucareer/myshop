import express from "express";
import Product from "../models/Product";

const router = express.Router();

// API để lấy danh sách sản phẩm
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// API để thêm sản phẩm mới
router.post("/", async (req, res) => {
  try {
    const { name, category, price, description, imageUrl, stock } = req.body;
    const product = new Product({
      name,
      category,
      price,
      description,
      imageUrl,
      stock,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
});

export default router;
