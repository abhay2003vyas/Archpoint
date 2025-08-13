import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Static credentials check
  if (email === "contactarchpoint@gmail.com" && password === "Archpoint@1234") {
    let admin = await Admin.findOne({ email });
    if (!admin) {
      admin = await Admin.create({ email, password });
    }

    const token = jwt.sign({ id: admin._id }, "secretkey", { expiresIn: "1h" });
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

export default router;
