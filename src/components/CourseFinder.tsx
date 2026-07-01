import React from 'react';

const CourseFinder = () => {
  return (
    <div className="max-w-4xl mx-auto -mt-10 relative z-10 px-6">
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">Let's find the right course for you</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <select className="w-full p-4 border rounded-2xl focus:outline-none focus:border-orange-500 bg-white">
            <option>Select topic of interest</option>
            <option>Software Development</option>
            <option>Data Analytics</option>
            <option>Generative AI</option>
            <option>Data Science</option>
          </select>

          <select className="w-full p-4 border rounded-2xl focus:outline-none focus:border-orange-500 bg-white">
            <option>I'm a...</option>
            <option>College Student</option>
            <option>Working Professional</option>
          </select>

          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 rounded-2xl text-lg">
            Find my course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseFinder;
