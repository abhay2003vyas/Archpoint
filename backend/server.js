import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js"; // ✅ new import

connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/inquiry", inquiryRoutes); // ✅ new route

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
