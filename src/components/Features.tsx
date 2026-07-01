import React from 'react';
import { MessageSquare, Terminal, FileText, Zap, Compass, ArrowUpRight } from 'lucide-react';

const Features = () => {
  const highlights = [
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-600" />,
      title: "1:1 Live Doubt Support",
      description: "Stuck on a bug? Connect instantly with our dedicated teaching assistants who resolve doubts via audio/video call and screen share in less than 20 minutes.",
      badge: "Fastest Resolution",
      bgGradient: "from-orange-50 to-amber-50"
    },
    {
      icon: <Terminal className="w-8 h-8 text-indigo-600" />,
      title: "In-Browser Code Studio",
      description: "Write, test, and compile code in real time without setting up any local environments. Learn syntax and concepts with over 2,000+ interactive challenges.",
      badge: "No Setup Required",
      bgGradient: "from-indigo-50 to-blue-50"
    },
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "Curated Placement Cell",
      description: "Get access to exclusive job opportunities, customized resume-building workshops, and mock interview rounds with experts from MAANG companies.",
      badge: "95% Placements",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: <Compass className="w-8 h-8 text-violet-600" />,
      title: "Guided Milestones Track",
      description: "Never lose motivation. Our structured learning paths guide you from basics to advanced levels with periodic coding tests, rewards, and leaderboards.",
      badge: "Gamified Learning",
      bgGradient: "from-violet-50 to-purple-50"
    }
  ];

  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text content */}
          <div className="lg:col-span-5">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">
              The Ninjas Advantage
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              An ecosystem built for your success
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              We go beyond just video lectures. Coding Ninjas provides an end-to-end support system to ensure you comprehend every line of code and bridge the gap to top-tier roles.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-700">✓</div>
                <span className="font-semibold text-gray-800">1:1 Doubt solving from 10 AM to midnight</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-700">✓</div>
                <span className="font-semibold text-gray-800">Curated assignments with instant evaluation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-700">✓</div>
                <span className="font-semibold text-gray-800">Dedicated career mentor for job placement</span>
              </div>
            </div>

            <button className="mt-10 px-6 py-3.5 bg-gray-900 text-white rounded-xl hover:bg-orange-600 font-semibold transition flex items-center gap-2">
              <span>View Course Syllabus</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Cards grid */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.bgGradient} p-8 rounded-3xl border border-gray-100/50 hover:shadow-lg transition duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                    {item.icon}
                  </div>
                  
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[10px] font-bold text-gray-700 border border-gray-100 mb-3 uppercase tracking-wider">
                    {item.badge}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
