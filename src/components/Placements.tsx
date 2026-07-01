import React from 'react';
import { ShieldCheck, Users, Briefcase, TrendingUp } from 'lucide-react';

const Placements = () => {
  const stats = [
    {
      icon: <Briefcase className="w-6 h-6 text-orange-600" />,
      value: "1,200+",
      label: "Hiring Partners",
      desc: "Top product & service companies"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
      value: "22.1 LPA",
      label: "Average Package",
      desc: "For top 20% graduates"
    },
    {
      icon: <Users className="w-6 h-6 text-orange-600" />,
      value: "95%",
      label: "Placement Rate",
      desc: "Active support until placed"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
      value: "1.2 Cr+",
      label: "Highest Package",
      desc: "Offered to our alumni"
    }
  ];

  const companies = [
    "Google", "Microsoft", "Amazon", "Adobe", "Walmart", 
    "Goldman Sachs", "Uber", "Salesforce", "OYO", "Paytm",
    "Morgan Stanley", "Samsung"
  ];

  return (
    <section className="py-24 bg-white" id="placements">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">
            Placement Outcomes
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
            Our graduates work at the world's best tech giants
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Our dedicated placement cell works day and night to schedule drives, arrange interviews, and negotiate packages for you.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-50 border border-gray-150 p-6 rounded-3xl text-center hover:shadow-md hover:border-orange-500/20 transition-all duration-300"
            >
              <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm font-bold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Company Logos Grid */}
        <div className="border border-gray-150 rounded-3xl p-10 bg-gray-50/50">
          <p className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">
            Top Hiring Partners
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center text-center">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="bg-white py-4 px-6 rounded-2xl shadow-sm border border-gray-100 font-bold text-lg text-gray-400 select-none hover:text-orange-500 hover:border-orange-500/20 hover:shadow transition duration-200"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Placements;
