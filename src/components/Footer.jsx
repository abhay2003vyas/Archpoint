import React from "react";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] text-[#1a1a1a] text-sm font-light pt-16 pb-10 px-6 lg:px-20">
  <div className="max-w-7xl mx-auto space-y-12">
    {/* Top Row */}
    <div className="flex flex-col md:flex-row justify-between gap-12">
      {/* Logo */}
      <div className="flex-1">
        <img src={logo} alt="Arch Point Logo" className="w-64" />
      </div>

      {/* Navigation */}
      <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Projects</h4>
          <a href="/projects" className="block hover:underline">Projects</a>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Practice</h4>
          <a href="/practice/about-us" className="block hover:underline">About Us</a>
          <a href="/practice/workshops" className="block hover:underline">Workshops</a>
        </div>
        <div>
          <h4 className="font-semibold mb-2">People</h4>
          <a href="/people/team" className="block hover:underline">Team</a>
          <a href="/people/careers" className="block hover:underline">Careers</a>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <a href="/resources/articles" className="block hover:underline">Articles</a>
        </div>
      </div>
    </div>

    {/* Info Row */}
    <div className="flex flex-col lg:flex-row justify-between gap-10">
      {/* Office Info */}
      <div>
        <h5 className="text-lg font-medium">Office</h5>
        <p className="mt-2">
          92/64, Patel Marg, Sector 9,<br />
          Mansarovar, Jaipur
        </p>
        <div className="mt-2 space-x-4">
          <a href="https://www.linkedin.com/company/14409093/admin/page-posts/published/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="https://www.facebook.com/teamarchpoint/" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
          <a href="https://www.instagram.com/archpoint_architecture/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
        </div>
      </div>

      {/* Contact Info */}
      <div>
        <h5 className="text-lg font-medium">Phone</h5>
        <a href="tel:9982507555" className="block mt-1 hover:underline">9982507555</a>
        <h5 className="mt-4 text-lg font-medium">Email</h5>
        <a href="mailto:contactarchpoint@gmail.com" className="hover:underline">contactarchpoint@gmail.com</a>
      </div>

      {/* Subscribe */}
      <div className="flex-1">
        <h5 className="text-lg font-medium">Subscribe</h5>
        <p className="mt-2">Get updates and insights from our team.</p>
        <form className="mt-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-2 rounded-md text-black"
          />
          <button className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-black opacity-10" />

    {/* Legal */}
    <div className="flex flex-col lg:flex-row justify-between items-center mt-10 text-xs text-gray-600">
      <p>© Arch Point {new Date().getFullYear()}</p>
      <p>Designed & Developed by Arch Point Team</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
