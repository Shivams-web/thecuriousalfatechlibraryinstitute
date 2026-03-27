import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, Award, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import EnquiryModal from '../components/EnquiryModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('General Admission');

  const stats = [
    { label: 'Years Experience', value: '10+', icon: Award },
    { label: 'Students Trained', value: '5000+', icon: Users },
    { label: 'Expert Courses', value: '50+', icon: BookOpen },
    { label: 'Job Support', value: '100%', icon: ShieldCheck },
  ];

  const featuredCourses = [
    {
      title: 'Full Stack Web Development',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
      price: '₹15,000',
      rating: 4.9,
      students: '1.2k',
    },
    {
      title: 'Python for Data Science',
      category: 'Programming',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=600',
      price: '₹12,000',
      rating: 4.8,
      students: '850',
    },
    {
      title: 'UI/UX Design Masterclass',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600',
      price: '₹10,000',
      rating: 4.7,
      students: '600',
    },
  ];

  const topStudents = [
    { name: 'Rahul Sharma', percentage: '98%', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200', course: 'Web Development' },
    { name: 'Priya Patel', percentage: '96%', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200', course: 'Data Science' },
    { name: 'Amit Kumar', percentage: '95%', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200', course: 'Python' },
    { name: 'Sneha Gupta', percentage: '94%', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200', course: 'UI/UX Design' },
    { name: 'Vikram Singh', percentage: '97%', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200', course: 'Full Stack' },
    { name: 'Ananya Iyer', percentage: '93%', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200', course: 'Digital Marketing' },
    { name: 'Rohan Mehta', percentage: '92%', photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200', course: 'Java' },
    { name: 'Kavita Reddy', percentage: '95%', photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200', course: 'Data Analytics' },
    { name: 'Arjun Kapoor', percentage: '91%', photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200', course: 'C++' },
    { name: 'Meera Nair', percentage: '94%', photo: 'https://images.unsplash.com/photo-1488421770523-b70139a4b5a4?auto=format&fit=crop&q=80&w=200', course: 'Graphic Design' },
    { name: 'Sanjay Verma', percentage: '90%', photo: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=200', course: 'Networking' },
    { name: 'Ishita Das', percentage: '96%', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200', course: 'Machine Learning' },
    { name: 'Karan Malhotra', percentage: '93%', photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=200', course: 'Cyber Security' },
    { name: 'Tanvi Joshi', percentage: '92%', photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200', course: 'Cloud Computing' },
    { name: 'Aditya Rao', percentage: '95%', photo: 'https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&fit=crop&q=80&w=200', course: 'React JS' },
    { name: 'Riya Saxena', percentage: '94%', photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=200', course: 'Node JS' },
    { name: 'Sameer Khan', percentage: '91%', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200', course: 'PHP' },
    { name: 'Pooja Mishra', percentage: '93%', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200', course: 'Android Dev' },
    { name: 'Varun Dhawan', percentage: '92%', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200', course: 'iOS Dev' },
    { name: 'Neha Kakkar', percentage: '95%', photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=200', course: 'Software Testing' },
    { name: 'Akash Ambani', percentage: '90%', photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200', course: 'Business Analytics' },
    { name: 'Shreya Ghoshal', percentage: '94%', photo: 'https://images.unsplash.com/photo-1557053910-d9eaba703fc9?auto=format&fit=crop&q=80&w=200', course: 'Content Writing' },
    { name: 'Sonu Nigam', percentage: '93%', photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=200', course: 'SEO' },
    { name: 'Lata Mangeshkar', percentage: '96%', photo: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=200', course: 'Tally' },
    { name: 'Kishore Kumar', percentage: '92%', photo: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=200', course: 'MS Office' },
    { name: 'Asha Bhosle', percentage: '91%', photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200', course: 'CCC' },
    { name: 'Mukesh Singh', percentage: '90%', photo: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=200', course: 'O Level' },
    { name: 'Alka Yagnik', percentage: '93%', photo: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=crop&q=80&w=200', course: 'A Level' },
    { name: 'Udit Narayan', percentage: '92%', photo: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=200', course: 'PGDCA' },
    { name: 'Kumar Sanu', percentage: '91%', photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=200', course: 'DCA' },
    { name: 'Shaan Ahmed', percentage: '94%', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200', course: 'Hardware' },
    { name: 'Sunidhi Chauhan', percentage: '95%', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200', course: 'Animation' },
  ];

  const handleEnquiry = (courseName: string) => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  return (
    <main className="pt-24">
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        courseName={selectedCourse} 
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb28f74b081?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover opacity-40"
            alt="Classroom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">
              India's Premier Tech Institute
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
              Empowering Minds, <br />
              <span className="text-blue-500">Building Futures.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Join the most trusted computer education institute and library. Master modern tech skills with expert guidance and a peaceful learning environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses" className="btn btn-primary px-8 py-4 text-lg group">
                Explore Courses
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => handleEnquiry('Library Membership')}
                className="btn btn-outline px-8 py-4 text-lg text-white border-white/20 hover:bg-white/10"
              >
                Join Library
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-slate-100">
        <div className="container py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="p-3 bg-blue-50 text-blue-700 rounded-xl mb-4">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-padding bg-slate-50" id="courses">
        <div className="container">
          <div className="section-title">
            <span className="text-blue-700 font-bold text-sm uppercase tracking-widest mb-3 block">Top Rated Programs</span>
            <h2>Our Featured Courses</h2>
            <p>Industry-aligned programs designed to make you job-ready from day one with hands-on practical training.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
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
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'} />
                    ))}
                    <span className="text-xs font-bold text-slate-500 ml-1">{course.rating} ({course.students} students)</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{course.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">Master the latest industry tools and technologies with our comprehensive curriculum.</p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <span className="text-2xl font-black text-slate-900">{course.price}</span>
                    <button 
                      onClick={() => handleEnquiry(course.title)}
                      className="btn btn-primary px-5 py-2 text-xs"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/courses" className="inline-flex items-center font-bold text-blue-700 hover:text-blue-800 transition-colors">
              View All Courses <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Student Success Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container mb-12">
          <div className="section-title">
            <span className="text-blue-700 font-bold text-sm uppercase tracking-widest mb-3 block">Wall of Fame</span>
            <h2>Our Top Achievers</h2>
            <p>Celebrating the hard work and success of our brilliant students who excelled in their respective fields.</p>
          </div>
        </div>

        {/* Marquee Row 1 - Moving Left */}
        <div className="flex mb-12">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...topStudents, ...topStudents].slice(0, 32).map((student, index) => (
              <div
                key={`${student.name}-${index}`}
                className="flex flex-col items-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-blue-50 transition-colors duration-300 w-[280px] shrink-0"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src={student.photo} className="w-full h-full object-cover" alt={student.name} referrerPolicy="no-referrer" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-700 text-white text-xs font-black px-2 py-1 rounded-lg">
                    {student.percentage}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">{student.name}</h4>
                <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">{student.course}</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee Row 2 - Moving Right */}
        <div className="flex">
          <motion.div
            animate={{ x: [-1920, 0] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...topStudents, ...topStudents].slice(16, 48).map((student, index) => (
              <div
                key={`${student.name}-row2-${index}`}
                className="flex flex-col items-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-blue-50 transition-colors duration-300 w-[280px] shrink-0"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src={student.photo} className="w-full h-full object-cover" alt={student.name} referrerPolicy="no-referrer" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-blue-700 text-white text-xs font-black px-2 py-1 rounded-lg">
                    {student.percentage}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">{student.name}</h4>
                <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">{student.course}</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="bg-blue-700 rounded-[2rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Ready to start your tech journey?</h2>
              <p className="text-blue-100 text-lg mb-10">
                Join thousands of successful students and get the skills you need for a high-paying career in technology.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => handleEnquiry('General Admission')}
                  className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors"
                >
                  Get Started Today
                </button>
                <Link to="/courses" className="bg-blue-800 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-colors border border-blue-600">
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
