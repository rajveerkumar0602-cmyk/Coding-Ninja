import React, { useState } from 'react';
import { BookOpen, Star, Clock, Trophy, ArrowRight } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  category: 'dsa' | 'webdev' | 'datascience';
  rating: number;
  reviews: string;
  duration: string;
  projects: number;
  tag: string;
  description: string;
  salaryHike: string;
  skills: string[];
  image: string;
}

const Courses = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'dsa' | 'webdev' | 'datascience'>('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'dsa', name: 'Data Structures & Algorithms' },
    { id: 'webdev', name: 'Web Development' },
    { id: 'datascience', name: 'Data Science & AI' },
  ];

  const coursesData: Course[] = [
    {
      id: 1,
      title: "Basics of C++ with Data Structures",
      category: "dsa",
      rating: 4.9,
      reviews: "12k+",
      duration: "4-6 Months",
      projects: 15,
      tag: "Best Seller",
      description: "Master C++ fundamentals, OOPs, Recursion, Trees, Graphs, and Dynamic Programming.",
      salaryHike: "76% Avg Hike",
      skills: ["C++", "DSA", "Algorithm Design", "Problem Solving"],
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "MERN Stack Web Development",
      category: "webdev",
      rating: 4.8,
      reviews: "9k+",
      duration: "6 Months",
      projects: 8,
      tag: "Most Popular",
      description: "Build production-ready full stack web applications using React, Node.js, Express, and MongoDB.",
      salaryHike: "92% Avg Hike",
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Data Science & Machine Learning",
      category: "datascience",
      rating: 4.9,
      reviews: "6k+",
      duration: "7 Months",
      projects: 10,
      tag: "Trending",
      description: "Learn Python, SQL, Statistics, Machine Learning algorithms, and Deep Learning techniques.",
      salaryHike: "85% Avg Hike",
      skills: ["Python", "SQL", "Pandas", "Scikit-Learn", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Java with Data Structures",
      category: "dsa",
      rating: 4.8,
      reviews: "10k+",
      duration: "4-6 Months",
      projects: 12,
      tag: "High Rated",
      description: "Learn Java language constructs, Object-Oriented concepts, and advanced DSA techniques.",
      skills: ["Java", "DSA", "Object-Oriented Programming", "System Design"],
      salaryHike: "70% Avg Hike",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Advanced Front-End Web Development",
      category: "webdev",
      rating: 4.7,
      reviews: "5k+",
      duration: "4 Months",
      projects: 6,
      tag: "Career Track",
      description: "Deep dive into advanced Javascript, React patterns, state management with Redux, and Tailwind CSS.",
      skills: ["Javascript", "React", "Redux", "Tailwind CSS", "TypeScript"],
      salaryHike: "88% Avg Hike",
      image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Generative AI & LLM Developer",
      category: "datascience",
      rating: 4.9,
      reviews: "3k+",
      duration: "3 Months",
      projects: 5,
      tag: "New",
      description: "Learn to build AI agents, leverage LangChain, OpenAI APIs, and fine-tune large language models.",
      skills: ["OpenAI API", "LangChain", "LLMs", "Vector Databases", "Prompt Engineering"],
      salaryHike: "110% Max Hike",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const filteredCourses = activeTab === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.category === activeTab);

  return (
    <div className="py-20 bg-gray-50 border-t border-gray-100" id="courses">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Explore our curated learning tracks
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Choose from industry-vetted courses designed to help you secure top roles in software engineering, data science, and AI.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/15'
                  : 'bg-white text-gray-600 hover:bg-gray-150 border border-gray-200'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-3xl border border-gray-200 hover:border-orange-500/30 hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
            >
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-56 object-cover"
              />
              
              {/* Header Info */}
              <div className="p-6 pb-4 border-b border-gray-100 relative">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 mb-4">
                  {course.tag}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                  {course.title}
                </h3>

                <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-amber-500" />
                    <span className="font-bold text-gray-900">{course.rating}</span>
                    <span>({course.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Details & Description */}
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                  {course.description}
                </p>

                {/* Course Metadata */}
                <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 p-4 rounded-2xl text-xs font-medium">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <BookOpen className="w-4 h-4 text-orange-500" />
                    <span>{course.projects}+ Projects</span>
                  </div>
                  <div className="col-span-2 flex items-center gap-2 text-green-700">
                    <Trophy className="w-4 h-4 text-green-600" />
                    <span>Placement Support • {course.salaryHike}</span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {course.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-[10px] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full py-3 bg-orange-50 group-hover:bg-orange-600 text-orange-600 group-hover:text-white rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                  <span>Explore Syllabus</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
