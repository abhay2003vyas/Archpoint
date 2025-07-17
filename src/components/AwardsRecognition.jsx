import React from 'react';
import {
  Award,
  Star,
  Trophy,
  Medal,
  Crown,
  Shield,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Importing local images
import img1 from '../assets/Asia.jpg';
import img2 from '../assets/IIBL.jpg';
import A1 from '../assets/Awards1.jpg';
import A2 from '../assets/Awards2.jpg';
import A3 from '../assets/Awards3.jpeg';
import A4 from '../assets/Awards4.jpeg';
import A5 from '../assets/Awards5.jpg';

const AwardsRecognition = () => {
  const awards = [
    {
      id: 1,
      title: "3rd Asia's Leadership Award",
      year: "2025",
      description:
        "In recognition of sustainable design innovation and contribution to the community.",
      icon: <Trophy className="w-10 h-10 text-yellow-500" />,
      category: "Leadership",
      image: img1
    },
    {
      id: 2,
      title: "IIBL Award",
      year: "2024",
      description:
        "For excellence in integrated architecture and project management—firming up our status as a comprehensive design force to be counted on.",
      icon: <Award className="w-10 h-10 text-blue-500" />,
      category: "Architecture",
      image: img2
    },
    {
      id: 3,
      title: "Excellence in Design Award",
      year: "2023",
      description:
        "Recognized for outstanding architectural design and innovative solutions in hospitality sector.",
      icon: <Medal className="w-10 h-10 text-green-500" />,
      category: "Design",
      image: A1
    },
    {
      id: 4,
      title: "Sustainability Champion Award",
      year: "2023",
      description:
        "Honored for commitment to sustainable practices and environmental responsibility in all projects.",
      icon: <Crown className="w-10 h-10 text-purple-500" />,
      category: "Sustainability",
      image: A2
    },
    {
      id: 5,
      title: "Innovation Excellence Award",
      year: "2022",
      description:
        "Awarded for breakthrough innovations in architectural design and smart building solutions.",
      icon: <Shield className="w-10 h-10 text-red-500" />,
      category: "Innovation",
      image: A4
    },
    {
      id: 6,
      title: "Quality Excellence Award",
      year: "2022",
      description:
        "Recognized for maintaining highest standards of quality in all architectural projects.",
      icon: <Star className="w-10 h-10 text-orange-500" />,
      category: "Quality",
      image: A5
    }
  ];

  const scrollLeft = () => {
    const container = document.getElementById('awards-container');
    container.scrollBy({ left: -450, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('awards-container');
    container.scrollBy({ left: 450, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <h1 className="text-5xl font-bold text-gray-800 mb-3">
              Awards & Recognition
            </h1>
            <div className="w-32 h-1.5 bg-red-500"></div>
          </div>
          <div className="flex items-center space-x-5">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-7 h-7 text-gray-600" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-7 h-7 text-gray-600" />
            </button>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 text-base font-medium"
            >
              SEE ALL AWARDS →
            </a>
          </div>
        </div>

        {/* Awards Horizontal Scroll */}
        <div className="relative">
          <div
            id="awards-container"
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {awards.map((award) => (
              <div
                key={award.id}
                className="flex-shrink-0 w-96 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Award Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    {award.icon}
                  </div>
                  <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-base font-medium">
                    {award.category}
                  </div>
                </div>

                {/* Award Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-base text-gray-500 font-medium">
                      {award.year.toUpperCase()}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-2">
                    {award.title}
                  </h3>

                  <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsRecognition;
