import React from 'react';

const demoBlogs = [
  { title: '2024 End of Year Wrap Up', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7339208363836149762', img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80' },
  { title: 'Various Park: A Vision Realized', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7335924943865458688', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
];

const BlogSection = () => (
  <section id="blog" className="py-16 bg-light">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Recent Articles</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {demoBlogs.map((blog, idx) => (
        <a key={idx} href={blog.link} target="_blank" rel="noopener noreferrer" className="block group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
          <img src={blog.img} alt={blog.title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-4 bg-white">
            <h3 className="text-lg font-bold text-gold mb-1">{blog.title}</h3>
            <p className="text-dark text-sm">Read more on LinkedIn</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default BlogSection; 