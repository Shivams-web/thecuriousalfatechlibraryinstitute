import { motion } from 'motion/react';
import { Star, Users, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnquiryModal from '../components/EnquiryModal';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('General Admission');

  const handleEnquiry = (courseName: string) => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  const categories = ['All', 'Development', 'Programming', 'Design', 'Digital Marketing', 'Data Science'];

  const allCourses = [
    {
      title: 'Full Stack Web Development',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
      price: '₹15,000',
      rating: 4.9,
      students: '1.2k',
      duration: '6 Months',
    },
    {
      title: 'Python for Data Science',
      category: 'Programming',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600',
      price: '₹12,000',
      rating: 4.8,
      students: '850',
      duration: '4 Months',
    },
    {
      title: 'UI/UX Design Masterclass',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600',
      price: '₹10,000',
      rating: 4.7,
      students: '600',
      duration: '3 Months',
    },
    {
      title: 'Digital Marketing Expert',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
      price: '₹8,000',
      rating: 4.6,
      students: '950',
      duration: '3 Months',
    },
    {
      title: 'Advanced Data Analytics',
      category: 'Data Science',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
      price: '₹18,000',
      rating: 4.9,
      students: '450',
      duration: '5 Months',
    },
    {
      title: 'Mobile App Development',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600',
      price: '₹16,000',
      rating: 4.8,
      students: '700',
      duration: '6 Months',
    },
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="pt-32">
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        courseName={selectedCourse} 
      />
      {/* Header Section */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight">
              Master the Skills of <br />
              <span className="text-blue-500">Tomorrow, Today.</span>
            </h1>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
              From coding to design, our comprehensive courses are designed to help you build a successful career in the digital world.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input
                type="text"
                placeholder="Search for courses (e.g. Web Development)"
                className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Courses Section */}
      <section className="section-padding bg-white">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-slate-900 font-bold mr-4">
              <Filter size={20} className="text-blue-700" />
              Filter By:
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === category ? 'bg-blue-700 text-white shadow-lg shadow-blue-900/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={course.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt={course.title}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                        {course.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-bold text-slate-900">{course.rating}</span>
                        <span className="text-xs text-slate-500">({course.students})</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500">
                        <Clock size={14} />
                        <span className="text-xs font-bold">{course.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{course.title}</h3>
                    <p className="text-slate-500 text-sm mb-6 line-clamp-2">Master the latest industry tools and technologies with our comprehensive curriculum.</p>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                      <span className="text-2xl font-black text-slate-900">{course.price}</span>
                      <button 
                        onClick={() => handleEnquiry(course.title)}
                        className="btn btn-primary px-5 py-2 text-xs group/btn"
                      >
                        Enquire Now
                        <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="text-slate-300 mb-4 flex justify-center">
                  <Search size={64} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No courses found</h3>
                <p className="text-slate-500">Try adjusting your search or filter to find what you're looking for.</p>
                <button onClick={() => {setSearchQuery(''); setActiveCategory('All');}} className="mt-6 text-blue-700 font-bold hover:underline">Clear all filters</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="section-title">
            <span className="text-blue-700 font-bold text-sm uppercase tracking-widest mb-3 block">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
            {[
              { q: 'Are the certificates globally recognized?', a: 'Yes, our certificates are issued in partnership with Rythm Education Foundation and are valued by top employers across the country.' },
              { q: 'Do you provide job placement assistance?', a: 'Absolutely! We have a dedicated placement cell that helps students with resume building, interview preparation, and connecting with hiring partners.' },
              { q: 'Can I attend a demo class?', a: 'Yes, we offer a free demo class for all our courses. You can contact us to schedule your session.' },
              { q: 'What is the batch timing?', a: 'We have multiple batches throughout the day, including morning, afternoon, and evening slots to accommodate students and working professionals.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;
