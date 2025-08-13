import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, contact, email } = req.body;

    if (!name || !contact || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({ name, contact, email });
    await newContact.save();

    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

export default router;
