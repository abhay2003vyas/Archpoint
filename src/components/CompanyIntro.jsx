import React from 'react';

export default function ArchPointProfessional() {
  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Company name */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-yellow-400 mb-2 tracking-wide">
            Arch Point Consultants Pvt. Ltd.
          </h1>
          <div className="w-24 h-px bg-yellow-400 mx-auto"></div>
        </div>

        {/* Main content */}
        <div>
          <div className="text-white text-lg leading-relaxed space-y-8">
            <p>
              Arch Point Consultants Pvt. Ltd. is a distinguished architectural and interior 
              design firm based in Jaipur, Rajasthan. With a team of seasoned professionals, 
              Arch Point Consultants offers comprehensive services encompassing architectural 
              design, interior design, project management consultancy, and residential design.
            </p>

            <p>
              The firm's design philosophy emphasizes a harmonious blend of client needs with 
              scientific and artistic principles, considering social, economic, geographic, and 
              cultural contexts to deliver innovative and exquisite designs.
            </p>
          </div>

          {/* Services section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-gray-700 font-medium text-lg">Architectural Design</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-gray-700 font-medium text-lg">Interior Design</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-gray-700 font-medium text-lg">Project Management</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-gray-700 font-medium text-lg">Residential Design</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}