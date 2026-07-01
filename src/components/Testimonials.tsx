import React from 'react';
import { Star, Quote, Award } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  bgGrad: string;
  hike: string;
  rating: number;
}

const Testimonials = () => {
  const ratingsList = [
    { source: "Google Reviews", score: "4.8", max: "5", count: "14,000+ ratings" },
    { source: "CourseReport", score: "4.9", max: "5", count: "5,000+ reviews" },
    { source: "Switchup", score: "4.8", max: "5", count: "3,500+ reviews" },
  ];

  const studentReviews: Testimonial[] = [
    {
      name: "Ananya Iyer",
      role: "Software Engineer",
      company: "Google",
      avatar: "👩‍💻",
      quote: "The mock interviews and resume reviews conducted by MAANG engineers gave me massive confidence. The 1:1 doubt support helped me clear coding problems instantly when I was struggling on tree problems.",
      bgGrad: "from-blue-50/50 to-indigo-50/50 border-blue-100",
      hike: "120% Salary Hike",
      rating: 5
    },
    {
      name: "Siddharth Verma",
      role: "SDE-1",
      company: "Amazon",
      avatar: "👨‍💻",
      quote: "Non-CS background was a major hurdle for me, but the structured C++ and DSA path made everything extremely approachable. The curriculum starts right from the basics and covers advanced graph algorithms.",
      bgGrad: "from-orange-50/50 to-amber-50/50 border-orange-100",
      hike: "85% Salary Hike",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      role: "Full Stack Developer",
      company: "Walmart Global Tech",
      avatar: "👩‍💻",
      quote: "I loved building full-stack projects in the MERN course. The course wasn't just theoretical; they forced us to build 8+ real-world web apps which made my portfolio stand out during hiring rounds.",
      bgGrad: "from-green-50/50 to-emerald-50/50 border-green-100",
      hike: "150% Salary Hike",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-b border-gray-100" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 mb-4">
            Alumni Success
          </span>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            100,000+ careers transformed
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Hear directly from our alumni who made successful career transitions to top product-based companies and technology startups.
          </p>
        </div>

        {/* Platform Ratings */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {ratingsList.map((rating, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center gap-1 mb-2 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {rating.score} / {rating.max}
              </div>
              <div className="text-sm font-semibold text-gray-700 mt-1">{rating.source}</div>
              <div className="text-xs text-gray-500 mt-1">{rating.count}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {studentReviews.map((review, index) => (
            <div 
              key={index}
              className={`bg-white rounded-3xl border p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300 ${review.bgGrad}`}
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gray-200" />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed italic mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* User info */}
              <div className="flex items-center justify-between border-t border-gray-150/60 pt-4 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl border border-gray-100 shadow-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.role} at <span className="font-semibold text-gray-800">{review.company}</span></p>
                  </div>
                </div>

                <span className="text-[11px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded-md">
                  {review.hike}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
