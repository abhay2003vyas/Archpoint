import React from 'react';

const DesignExpertise = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-light text-gray-800 mb-6">Design Expertise</h1>
          <div className="w-full h-px bg-gray-400 mb-8"></div>
          
          <div className="max-w-md">
            <p className="text-gray-700 leading-relaxed">
              Pushing beyond traditional design boundaries, <span className="font-semibold">Arch Point</span><br />
              crafts visionary cities, buildings, landscapes and interiors<br />
              centred around people and their wellbeing
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Venn Diagram */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <svg width="500" height="500" viewBox="0 0 500 500" className="max-w-full">
              {/* Architecture + Interiors Circle */}
              <circle
                cx="200"
                cy="180"
                r="120"
                fill="none"
                stroke="#666"
                strokeWidth="2"
                strokeDasharray="none"
              />
              
              {/* Urban Design Circle */}
              <circle
                cx="300"
                cy="180"
                r="120"
                fill="none"
                stroke="#666"
                strokeWidth="2"
                strokeDasharray="8,4"
              />
              
              {/* Landscape Architecture Circle */}
              <circle
                cx="200"
                cy="280"
                r="120"
                fill="none"
                stroke="#666"
                strokeWidth="2"
                strokeDasharray="8,4"
              />
              
              {/* Strategic Planning Circle */}
              <circle
                cx="300"
                cy="280"
                r="120"
                fill="none"
                stroke="#666"
                strokeWidth="2"
                strokeDasharray="2,2"
              />

              {/* Central Intersection - Orange Gradient */}
              <defs>
                <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff7f50" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#ff6347" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ff4500" stopOpacity="0.4" />
                </radialGradient>
              </defs>
              
              {/* Central orange area */}
              <ellipse
                cx="250"
                cy="230"
                rx="45"
                ry="35"
                fill="url(#centerGradient)"
              />
              
              {/* Additional orange blobs for intersection */}
              <ellipse
                cx="230"
                cy="210"
                rx="35"
                ry="25"
                fill="#ff7f50"
                opacity="0.6"
              />
              
              <ellipse
                cx="270"
                cy="250"
                rx="40"
                ry="30"
                fill="#ff6347"
                opacity="0.5"
              />

              {/* Labels */}
              <text x="140" y="150" className="text-sm font-medium fill-gray-700">
                architecture
              </text>
              <text x="140" y="170" className="text-sm font-medium fill-gray-700">
                + interiors.
              </text>

              <text x="340" y="150" className="text-sm font-medium fill-gray-700">
                urban
              </text>
              <text x="340" y="170" className="text-sm font-medium fill-gray-700">
                design.
              </text>

              <text x="130" y="350" className="text-sm font-medium fill-gray-700">
                landscape
              </text>
              <text x="130" y="370" className="text-sm font-medium fill-gray-700">
                architecture.
              </text>

              <text x="340" y="350" className="text-sm font-medium fill-gray-700">
                strategic
              </text>
              <text x="340" y="370" className="text-sm font-medium fill-gray-700">
                planning.
              </text>

              {/* Arch Point Label with Arrow */}
              <text x="60" y="300" className="text-lg font-medium fill-gray-800">
                Arch Point
              </text>
              
              {/* Curved arrow pointing to center */}
              <path
                d="M 120 310 Q 180 280 210 240"
                fill="none"
                stroke="#666"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
              />
              
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="#666"
                  />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="max-w-lg">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Multi-disciplinary design, cross-sector expertise that<br />
                delivers neighbourhood and city-wide benefits for all.
              </p>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-medium">About</span>
                <span className="text-gray-800 font-semibold">Arch Point</span>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-gray-600"
                >
                  <path 
                    d="M5 12h14m-7-7l7 7-7 7" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignExpertise;