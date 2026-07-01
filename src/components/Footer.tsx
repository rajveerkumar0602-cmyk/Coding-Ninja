import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          
          {/* Logo / Bio */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold text-xl">N</div>
              <span className="font-bold text-2xl text-white">Coding Ninjas</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
              India's leading coding education platform. We help college students and working professionals master coding and kickstart their tech careers.
            </p>
            <div className="flex gap-4">
              {/* Simple Mock Social Icons */}
              <span className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-xs hover:border-orange-500 text-gray-500 hover:text-white cursor-pointer transition">Fb</span>
              <span className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-xs hover:border-orange-500 text-gray-500 hover:text-white cursor-pointer transition">Tw</span>
              <span className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-xs hover:border-orange-500 text-gray-500 hover:text-white cursor-pointer transition">In</span>
              <span className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-xs hover:border-orange-500 text-gray-500 hover:text-white cursor-pointer transition">Yt</span>
            </div>
          </div>

          {/* Column 1: Courses */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Courses</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><a href="#" className="hover:text-orange-500 transition">C++ Foundation</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Java & DSA</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">MERN Web Dev</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Data Science & ML</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Generative AI</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><a href="#" className="hover:text-orange-500 transition">Code Studio</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Mock Test Series</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Coding Interview Guide</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Articles & Blogs</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Alumni Stories</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Help */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <p>&copy; 2026 Coding Ninjas Clone. Built with React & Tailwind CSS.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition">Terms</a>
            <a href="#" className="hover:text-gray-400 transition">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
