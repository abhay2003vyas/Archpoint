import express from "express";
import Blog from "../models/Blog.js";
import jwt from "jsonwebtoken";

const router = express.Router();

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.adminId = decoded.id;
    next();
  });
};

// CREATE
router.post("/", authMiddleware, async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.json(blog);
});

// READ
router.get("/", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// UPDATE
router.put("/:id", authMiddleware, async (req, res) => {
  const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete("/:id", authMiddleware, async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

export default router;
