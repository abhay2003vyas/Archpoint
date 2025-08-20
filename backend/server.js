import express from "express";
import cors from "cors";
import morgan from "morgan"; // ✅ logs HTTP requests
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Morgan logger
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/inquiry", inquiryRoutes);

// Health Check
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// Global Error Handler (catch unexpected errors)
app.use((err, req, res, next) => {
  console.error("🔥 Global Error:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("====================================");
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log("📌 Routes available:");
  console.log("   👉 /api/auth");
  console.log("   👉 /api/blogs");
  console.log("   👉 /api/contacts");
  console.log("   👉 /api/inquiry");
  console.log("====================================");
});
