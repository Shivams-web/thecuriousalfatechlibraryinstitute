import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import EnquiryModal from './EnquiryModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('General Admission');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleEnquiry = (courseName: string = 'General Admission') => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        courseName={selectedCourse} 
      />
      {/* Notice Board / Top Bar */}
      <div className="bg-blue-900 text-white py-2 overflow-hidden relative z-50">
        <div className="container flex items-center">
          <div className="flex items-center gap-2 px-4 bg-blue-800 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap z-10">
            <Bell size={14} className="animate-pulse" />
            Notice
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div className="notice-marquee text-sm font-medium">
              🚀 New Batch for Full Stack Web Development starts from April 1st! | 📚 Library memberships now open with 24/7 access | 🏆 100% Job Placement assistance for Python Data Science students | 🎓 ISO 9001:2015 Certified Institution
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-5'}`}>
        <div className="container flex justify-between items-center">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="text-xl font-black text-slate-900 tracking-tighter">THE CURIOUS ALFA</span>
            <span className="text-[10px] font-bold text-blue-700 tracking-[0.2em] uppercase">Tech Computer & Library</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-300 ${location.pathname === link.path ? 'text-blue-700' : 'text-slate-600 hover:text-blue-700'}`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => handleEnquiry()}
              className="btn btn-primary px-5 py-2 text-sm"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] md:hidden flex flex-col pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-2xl font-bold ${location.pathname === link.path ? 'text-blue-700' : 'text-slate-900'}`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <Phone size={20} className="text-blue-700" />
                  <span className="font-medium">+91 88742 72735</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail size={20} className="text-blue-700" />
                  <span className="font-medium">abhi.cafe.2.0@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin size={20} className="text-blue-700" />
                  <span className="font-medium">123 Education Hub, Main Road</span>
                </div>
              </div>
              <button 
                onClick={() => handleEnquiry()}
                className="btn btn-primary w-full py-4 mt-4"
              >
                Enquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
