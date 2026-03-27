import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex flex-col leading-tight">
              <span className="text-2xl font-black text-white tracking-tighter">THE CURIOUS ALFA</span>
              <span className="text-xs font-bold text-blue-400 tracking-[0.2em] uppercase">Tech Computer & Library</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              The premier destination for computer education and focused self-study. Empowering the next generation of tech leaders through certified excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-700 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-700 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-700 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-700 transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Courses</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-400 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Courses</h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Python Programming</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Graphic Design</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Digital Marketing</Link></li>
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">Data Science</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="flex flex-col gap-4 text-slate-400 text-sm">
              <li className="flex gap-3">
                <MapPin size={20} className="text-blue-400 shrink-0" />
                <span>123 Education Hub, Main Road, New Delhi, India</span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-blue-400 shrink-0" />
                <span>+91 88742 72735</span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-blue-400 shrink-0" />
                <span>abhi.cafe.2.0@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>&copy; 2026 The Curious Alfa Tech Computer & Library. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">ISO 9001:2015 Certified</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
