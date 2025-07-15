import React from 'react';
import { Award, Star, Trophy, Medal, Crown, Shield } from 'lucide-react';
import img1 from '../assets/Asia.jpg'
import img2 from '../assets/IIBL.jpg'
import A1 from '../assets/Awards1.jpg'
import A2 from '../assets/Awards2.jpg'
import A3 from '../assets/Awards3.jpeg'
import A4 from '../assets/Awards4.jpeg'
import A5 from '../assets/Awards5.jpg'
const AwardsRecognition = () => {
  const awards = [
    {
      id: 1,
      title: "3rd Asia's Leadership Award",
      year: "2025",
      description: "In recognition of sustainable design innovation and contribution to the community.",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      category: "Leadership",
      image: img1
    },
    {
      id: 2,
      title: "IIBL Award",
      year: "2024",
      description: "For excellence in integrated architecture and project management—firming up our status as a comprehensive design force to be counted on.",
      icon: <Award className="w-8 h-8 text-blue-500" />,
      category: "Architecture",
      image: img2
    }
  ];

  const additionalImages = [
    A1,
    A2,
    A4,
    A5  
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full shadow-lg">
              <Crown className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Awards & Recognition
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence in hospitality, innovation, and sustainable design practices
          </p>
        </div>

        {/* Main Awards Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {awards.map((award) => (
            <div key={award.id} className="group">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Award Image */}
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="w-full h-full object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    {award.icon}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {award.category}
                  </div>
                </div>

                {/* Award Content */}
                <div className="p-8 h-80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        {award.title}
                      </h3>
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        {award.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {award.description}
                    </p>
                  </div>

                  <div>
                    {/* Rating Stars */}
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">Excellence Recognition</span>
                    </div>

                    {/* Achievement Badge */}
                    <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      <Shield className="w-4 h-4 mr-2" />
                      Certified Achievement
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Images Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Recognition Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={image} 
                    alt={`Recognition ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Medal className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">15+</h3>
              <p className="text-gray-600">Awards Won</p>
            </div>
            <div className="group">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">5</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="group">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">3</h3>
              <p className="text-gray-600">Leadership Awards</p>
            </div>
            <div className="group">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">100%</h3>
              <p className="text-gray-600">Quality Certified</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Experience Award-Winning Excellence
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us and experience the hospitality standards that have earned us recognition across Asia
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
            Book Your Stay
          </button>
        </div>
      </div>
    </div>
  );
};

export default AwardsRecognition;