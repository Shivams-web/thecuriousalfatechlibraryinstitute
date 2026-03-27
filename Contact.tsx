import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Replace with your actual EmailJS Public Key
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace with your actual Service ID and Template ID
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'abhi.cafe.2.0@gmail.com',
        }
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });

      // Optional: Also redirect to WhatsApp after successful email
      const whatsappMessage = `Hello! I am ${formData.name}. I want to enquire about ${formData.subject}. Message: ${formData.message}`;
      window.open(`https://wa.me/918874272735?text=${encodeURIComponent(whatsappMessage)}`, '_blank');

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-32">
      {/* Header Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-700 font-bold text-sm uppercase tracking-widest mb-4 block">Get In Touch</span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
                Let's Start Your <br />
                <span className="text-blue-700">Journey Together.</span>
              </h1>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Have questions about our courses, library memberships, or certification? Our team is here to help you every step of the way.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="p-3 bg-blue-50 text-blue-700 rounded-xl h-fit">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-sm text-slate-500">+91 88742 72735</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="p-3 bg-blue-50 text-blue-700 rounded-xl h-fit">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-sm text-slate-500">abhi.cafe.2.0@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="p-3 bg-blue-50 text-blue-700 rounded-xl h-fit">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                    <p className="text-sm text-slate-500">123 Education Hub, Main Road</p>
                    <p className="text-sm text-slate-500">New Delhi, India - 110001</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="p-3 bg-blue-50 text-blue-700 rounded-xl h-fit">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                    <p className="text-sm text-slate-500">Mon - Sat: 8 AM - 8 PM</p>
                    <p className="text-sm text-slate-500">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-slate-100 w-full"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-700 text-white rounded-lg">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-xl text-sm font-bold border border-green-100">
                    Message sent successfully! We will get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm font-bold border border-red-100">
                    Something went wrong. Please try again or contact us via phone.
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      required
                      className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      required
                      className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="+91 88742 72735"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Subject</label>
                    <select
                      className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option>General Inquiry</option>
                      <option>Course Admission</option>
                      <option>Library Membership</option>
                      <option>Career Guidance</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn btn-primary w-full py-4 text-lg group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container">
          <div className="w-full h-[450px] rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1234567890123!2d77.12345678901234!3d28.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzM0LjQiTiA3N8KwMDcnMzQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
