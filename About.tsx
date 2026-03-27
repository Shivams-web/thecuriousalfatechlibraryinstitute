import { motion } from 'motion/react';
import { Award, Target, Eye, Users, CheckCircle2, Star } from 'lucide-react';

const About = () => {
  const values = [
    { title: 'Excellence', description: 'We strive for the highest standards in education and student support.', icon: Award },
    { title: 'Innovation', description: 'Our curriculum is constantly updated with the latest industry trends.', icon: Target },
    { title: 'Integrity', description: 'We maintain transparency and honesty in all our operations.', icon: ShieldCheck },
    { title: 'Student-Centric', description: 'Every decision we make is focused on the success of our students.', icon: Users },
  ];

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-700 font-bold text-sm uppercase tracking-widest mb-4 block">Our Story</span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
                A Legacy of <br />
                <span className="text-blue-700">Excellence in Education.</span>
              </h1>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Founded in 2016, The Curious Alfa Tech Computer & Library has been at the forefront of providing quality technical education. We believe that every individual has the potential to excel in the digital age with the right guidance and resources.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-black text-slate-900 mb-1">10+</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Years of Impact</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-slate-900 mb-1">5k+</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Alumni Network</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover"
                  alt="Students collaborating"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-50 text-blue-700 rounded-xl">
                    <Award size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">ISO 9001:2015</h5>
                    <p className="text-xs text-slate-500">Certified Institution</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-10 bg-blue-700 rounded-3xl text-white shadow-xl shadow-blue-900/20"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                To provide accessible, high-quality technical education that empowers students with the skills needed to thrive in the modern workforce and contribute meaningfully to society.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-10 bg-slate-900 rounded-3xl text-white shadow-xl shadow-slate-900/20"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                To be the most trusted and innovative technical training institute in India, recognized for producing world-class tech professionals and fostering a culture of lifelong learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="section-title">
            <span className="text-blue-700 font-bold text-sm uppercase tracking-widest mb-3 block">What We Stand For</span>
            <h2>Our Core Values</h2>
            <p>These principles guide every decision we make and every interaction we have with our students.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="p-3 bg-slate-50 text-slate-900 rounded-xl mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300 inline-block">
                  <value.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="bg-slate-50 rounded-[2.5rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-blue-700 font-bold text-sm uppercase tracking-widest mb-4 block">Certification</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
                Globally Recognized <br />
                <span className="text-blue-700">Accreditation.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Our partnership with Rythm Education Foundation ensures that every student receives a certificate that is valued by top employers across the country. We maintain strict academic standards to ensure quality education.
              </p>
              <div className="flex flex-col gap-4">
                {['ISO 9001:2015 Certified', 'Rythm Education Foundation Partner', 'Industry-Aligned Curriculum', 'Expert-Led Training'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-900 font-bold">
                    <CheckCircle2 size={20} className="text-blue-700" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full border-[12px] border-slate-200 flex flex-col items-center justify-center text-center p-8 shadow-2xl">
                <div className="text-blue-700 font-black text-4xl mb-2 tracking-tighter">REF</div>
                <div className="text-slate-900 font-bold text-sm uppercase tracking-widest leading-tight">
                  Rythm Education <br /> Foundation
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Official Training Partner
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const ShieldCheck = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default About;
