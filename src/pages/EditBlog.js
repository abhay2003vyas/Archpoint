import { useState, useEffect } from "react";

export default function EditBlog() {
  // Mock useParams and useNavigate for demo purposes
  const id = "new"; // This would come from useParams()
  const navigate = (path) => console.log(`Navigating to: ${path}`); // This would come from useNavigate()
  
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  const [blog, setBlog] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "",
    image: "",
    readTime: "",
    featured: false,
    status: "draft",
    tags: []
  });

  const [newTag, setNewTag] = useState("");

  const categories = [
    "Sustainability", 
    "Technology", 
    "Design", 
    "Urban Planning", 
    "Heritage", 
    "Construction",
    "Architecture",
    "Interior Design"
  ];

  useEffect(() => {
    setIsVisible(true);
    if (id !== "new") {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://archpoint.onrender.com/api/blogs`);
      const data = await response.json();
      const found = data.find((b) => b._id === id);
      if (found) setBlog(found);
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!blog.title.trim()) newErrors.title = "Title is required";
    if (!blog.excerpt.trim()) newErrors.excerpt = "Excerpt is required";
    if (!blog.content.trim()) newErrors.content = "Content is required";
    if (!blog.category.trim()) newErrors.category = "Category is required";
    if (!blog.author.trim()) newErrors.author = "Author is required";
    if (!blog.readTime.trim()) newErrors.readTime = "Read time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveBlog = async (status = blog.status) => {
    if (!validateForm()) return;

    try {
      setIsSaving(true);
      const blogData = { ...blog, status };
      
      const url = id === "new" 
        ? "https://archpoint.onrender.com/api/blogs"
        : `https://archpoint.onrender.com/api/blogs/${id}`;
      
      const method = id === "new" ? "POST" : "PUT";
      
      const response = await fetch(url, {
        method,
        headers: { 
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(blogData)
      });

      if (response.ok) {
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error saving blog:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const addTag = () => {
    if (newTag.trim() && !blog.tags.includes(newTag.trim())) {
      setBlog({ ...blog, tags: [...blog.tags, newTag.trim()] });
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setBlog({ ...blog, tags: blog.tags.filter(tag => tag !== tagToRemove) });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  // Icon Components
  const EditIcon = () => (
    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );

  const SaveIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  );

  const PublishIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );

  const PreviewIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );

  const BackIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );

  const ImageIcon = () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const TagIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-yellow-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-slate-50 via-gray-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate("/admin")}
                className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors duration-200"
              >
                <BackIcon />
                <span>Back to Dashboard</span>
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-3">
                <EditIcon />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {id === "new" ? "Create New Blog" : "Edit Blog"}
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-all duration-200"
              >
                <PreviewIcon />
                <span>{showPreview ? "Edit" : "Preview"}</span>
              </button>
              
              <button
                onClick={() => saveBlog("draft")}
                disabled={isSaving}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-all duration-200 disabled:opacity-50"
              >
                <SaveIcon />
                <span>{isSaving ? "Saving..." : "Save Draft"}</span>
              </button>
              
              <button
                onClick={() => saveBlog("published")}
                disabled={isSaving}
                className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
              >
                <PublishIcon />
                <span>{isSaving ? "Publishing..." : "Publish"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Blog Title *
              </label>
              <input
                type="text"
                placeholder="Enter a compelling title..."
                value={blog.title}
                onChange={(e) => setBlog({ ...blog, title: e.target.value })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 text-lg font-medium ${
                  errors.title ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white/90 hover:bg-white'
                }`}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            {/* Excerpt */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Excerpt *
              </label>
              <textarea
                placeholder="Write a brief summary of your blog post..."
                value={blog.excerpt}
                onChange={(e) => setBlog({ ...blog, excerpt: e.target.value })}
                rows={3}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 resize-none ${
                  errors.excerpt ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white/90 hover:bg-white'
                }`}
              />
              {errors.excerpt && <p className="text-red-500 text-sm mt-1">{errors.excerpt}</p>}
            </div>

            {/* Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content *
              </label>
              <textarea
                placeholder="Write your blog content here..."
                value={blog.content}
                onChange={(e) => setBlog({ ...blog, content: e.target.value })}
                rows={12}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 resize-none font-mono ${
                  errors.content ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white/90 hover:bg-white'
                }`}
              />
              {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
            </div>

            {/* Featured Image */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Featured Image
              </label>
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ImageIcon />
                  </div>
                  <input
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    value={blog.image}
                    onChange={(e) => setBlog({ ...blog, image: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 bg-white/90 hover:bg-white"
                  />
                </div>
                {blog.image && (
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={blog.image}
                      alt="Preview"
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Post Settings */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Post Settings</h3>
              
              <div className="space-y-4">
                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={blog.category}
                    onChange={(e) => setBlog({ ...blog, category: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 ${
                      errors.category ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white/90 hover:bg-white'
                    }`}
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                </div>

                {/* Author */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Author *
                  </label>
                  <input
                    type="text"
                    placeholder="Author name"
                    value={blog.author}
                    onChange={(e) => setBlog({ ...blog, author: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 ${
                      errors.author ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white/90 hover:bg-white'
                    }`}
                  />
                  {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
                </div>

                {/* Read Time */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Read Time *
                  </label>
                  <input
                    type="text"
                    placeholder="5 min read"
                    value={blog.readTime}
                    onChange={(e) => setBlog({ ...blog, readTime: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 ${
                      errors.readTime ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white/90 hover:bg-white'
                    }`}
                  />
                  {errors.readTime && <p className="text-red-500 text-sm mt-1">{errors.readTime}</p>}
                </div>

                {/* Featured Toggle */}
                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Featured Post</label>
                    <p className="text-xs text-gray-500">Show this post prominently</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={blog.featured}
                      onChange={(e) => setBlog({ ...blog, featured: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
              
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Add a tag..."
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 bg-white/90 hover:bg-white text-sm"
                  />
                  <button
                    onClick={addTag}
                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    Add
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full"
                    >
                      <TagIcon />
                      <span className="ml-1">{tag}</span>
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-yellow-600 hover:text-yellow-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Publication Status</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="draft"
                    checked={blog.status === "draft"}
                    onChange={(e) => setBlog({ ...blog, status: e.target.value })}
                    className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Save as Draft</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="published"
                    checked={blog.status === "published"}
                    onChange={(e) => setBlog({ ...blog, status: e.target.value })}
                    className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 focus:ring-yellow-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Publish Immediately</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}