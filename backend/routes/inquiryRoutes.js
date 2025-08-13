// backend/routes/inquiryRoutes.js
import express from "express";
import Inquiry from "../models/Inquiry.js";

const router = express.Router();

// POST /api/inquiry
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, projectDetails } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Name, email, and phone are required" });
    }

    const newInquiry = new Inquiry({ name, email, phone, projectDetails });
    await newInquiry.save();

    res.status(201).json({ message: "Inquiry submitted successfully" });
  } catch (err) {
    console.error("Error saving inquiry:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
