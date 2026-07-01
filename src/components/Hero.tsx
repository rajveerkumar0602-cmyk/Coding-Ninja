import React from 'react';

interface HeroProps {
  onBookClassClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookClassClick }) => {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm mb-6 shadow">
              <span className="text-green-600">●</span> New: AI-Powered Curriculum
            </div>

            <h1 className="text-6xl font-bold leading-tight text-gray-900">
              Give your career an <span className="text-orange-600">unfair AI advantage</span>
            </h1>

            <p className="mt-6 text-xl text-gray-600">
              Master cutting-edge tech with industry-ready projects, expert mentorship, and 95% placement success.
            </p>

            <div className="mt-10 flex gap-4">
              <button
                onClick={onBookClassClick}
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold text-lg transition-colors"
              >
                Book Free Class
              </button>
              <a
                href="#courses"
                className="px-8 py-4 border border-gray-300 hover:bg-gray-50 rounded-xl font-semibold text-lg inline-block text-center transition-colors"
              >
                Explore Courses
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://picsum.photos/id/1015/800/520"
              alt="Coding Ninjas Hero"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
