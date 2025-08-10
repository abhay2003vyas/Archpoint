import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  excerpt: String,
  category: String,
  author: String,
  date: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  readTime: String,
  image: String,
  featured: { type: Boolean, default: false }
});

export default mongoose.model("Blog", blogSchema);
