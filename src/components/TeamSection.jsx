import React from 'react';

const TeamSection = () => {
  return (
    <div className="bg-[#f8f3ed] px-6 md:px-16 py-20">
      {/* Top Content */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 border-b border-gray-400 pb-4">
          <h2 className="text-5xl font-light text-gray-900">Team</h2>
        </div>

        <div className="md:flex md:justify-between md:items-start gap-10 mb-10">
          <div className="max-w-2xl">
            <p className="text-gray-700 text-base leading-relaxed mb-6 font-light">
              The depth of our multi-disciplinary experience coupled with our tight-knit, team-based approach ensures that Archipelago offers the intelligence and breadth of large corporate practices with the immediacy and flexibility of a small design studio.
            </p>

            <a
              href="/people/team"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black border-b border-black group"
            >
              <span>Meet The Team</span>
              <svg
                width="24"
                height="16"
                viewBox="0 0 23 17"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.0001 8.22269L14.7774 0L14.0703 0.707107L21.1005 7.7373H0.28125V8.7373H21.0713L14.0703 15.7383L14.7774 16.4454L23.0001 8.22269Z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="text-center">
          <img
            src="https://cdn.prod.website-files.com/65249822a54c89915817034b/6743d51dbd088e4db8db789d_Archipelago%20Nov%202024_web.webp"
            alt="The Archipelago Team"
            className="w-full rounded-sm shadow-md mb-4"
            loading="lazy"
          />
          <p className="text-sm text-gray-600 italic">The Archipelago Team</p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
