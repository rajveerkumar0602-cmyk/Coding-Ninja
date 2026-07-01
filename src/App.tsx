import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseFinder from './components/CourseFinder';
import Courses from './components/Courses';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Placements from './components/Placements';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import BookClassModal from './components/BookClassModal';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showBookClass, setShowBookClass] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onBookClassClick={() => setShowBookClass(true)}
      />
      <Hero onBookClassClick={() => setShowBookClass(true)} />

      <CourseFinder />
      <Courses />
      <Features />
      <Testimonials />
      <Placements />
      <Footer />

      {/* Modals */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <BookClassModal isOpen={showBookClass} onClose={() => setShowBookClass(false)} />
    </div>
  );
}

export default App;