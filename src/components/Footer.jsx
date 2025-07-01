import React from "react";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#3e3e31] text-white text-sm font-light pt-16 pb-10 px-6 lg:px-20">
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
            <p className="mt-2">Turrbal and Yuggera/Jaggera Country<br />Level 3, 199 George Street Brisbane QLD 4000</p>
            <div className="mt-2 space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-medium">Phone</h5>
            <a href="tel:+61732364606" className="block mt-1 hover:underline">+61 7 3236 4606</a>
            <h5 className="mt-4 text-lg font-medium">Email</h5>
            <a href="mailto:mail@archipelago.com.au" className="hover:underline">mail@archipelago.com.au</a>
          </div>

          {/* Subscribe Form */}
          <div className="flex-1">
            <h5 className="text-lg font-medium">Subscribe</h5>
            <p className="mt-2">Our strategy, thinking and insights. Shared with you.</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-2 rounded-md text-black"
              />
              <button className="mt-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white opacity-20" />

        {/* Bottom Flags + Acknowledgments */}
        <div className="flex flex-col lg:flex-row justify-between text-xs gap-10">
          <div className="space-y-2">
            <div className="flex gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Aboriginal_Australians.svg/1280px-Flag_of_Aboriginal_Australians.svg.png" alt="Flag" className="w-10" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Flag_of_the_Torres_Strait_Islanders.svg" alt="Flag" className="w-10" />
            </div>
            <p>Archipelago® acknowledges the Traditional Custodians of the land...</p>
          </div>
          <div className="space-y-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Progressive_Pride_Flag.svg/1920px-Progressive_Pride_Flag.svg.png" alt="Pride Flag" className="w-16" />
            <p>Archipelago® is a proudly inclusive organisation and an ally of LGBTIQ+ community and the movement toward equality.</p>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-10 text-xs opacity-70">
          <p>© Archipelago 2023</p>
          <a href="https://igniteonline.com.au/" target="_blank" rel="noopener noreferrer">Website by IGNITE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
