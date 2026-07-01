import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
  onBookClassClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onBookClassClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl">N</div>
          <span className="font-bold text-3xl text-gray-900">Coding Ninjas</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#courses" className="hover:text-orange-600 transition-colors">Courses</a>
          <a href="#" className="hover:text-orange-600 transition-colors">For Colleges</a>
          <a href="#" className="hover:text-orange-600 transition-colors">For Professionals</a>
          <a href="#" className="hover:text-orange-600 transition-colors">Blog</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onLoginClick}
            className="hidden md:block px-6 py-2.5 text-sm font-medium border rounded-xl hover:bg-gray-50"
          >
            Login
          </button>
          <button 
            onClick={onBookClassClick}
            className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all"
          >
            Book Free Class
          </button>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4 text-lg">
          <a href="#courses" className="block py-2">Courses</a>
          <a href="#" className="block py-2">For Colleges</a>
          <a href="#" className="block py-2">For Professionals</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
