import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// ✅ Setup transporter once (not on every request)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter at server start
transporter
  .verify()
  .then(() => console.log("✅ Mail server ready"))
  .catch((err) => console.error("❌ Mail server error:", err));

// 📩 Contact Form Route
router.post("/", async (req, res) => {
  try {
    const { name, contact, email } = req.body;

    if (!name || !contact || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to DB
    const newContact = new Contact({ name, contact, email });
    await newContact.save();

    // Email content
    const mailOptions = {
      from: `"ArchPoint Contact" <${process.env.EMAIL_USER}>`,
      to: "co.2021.asvyas@bitwardha.ac.in", // 👈 Admin email
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("📩 Email sent successfully");
      return res.status(201).json({
        message: "Contact saved & email sent successfully",
      });
    } catch (mailError) {
      console.error("❌ Error sending email:", mailError);
      return res.status(201).json({
        message: "Contact saved, but email could not be sent",
      });
    }
  } catch (error) {
    console.error("Error in contact form submission:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});

export default router;
