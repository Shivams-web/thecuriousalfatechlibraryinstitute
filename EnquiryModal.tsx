import { motion, AnimatePresence } from 'motion/react';
import { X, Send, User } from 'lucide-react';
import React, { useState } from 'react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, courseName }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      const whatsappMessage = `Hello! I am ${name}. I want to enquire about the ${courseName} course.`;
      window.open(`https://wa.me/918874272735?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      onClose();
      setName('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-700 text-white rounded-lg">
                    <User size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Enquire Now</h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <p className="text-slate-500 text-sm mb-8">
                Please enter your name to enquire about <span className="text-blue-700 font-bold">{courseName}</span>. We will redirect you to WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Name</label>
                  <input
                    type="text"
                    required
                    autoFocus
                    className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full py-4 text-lg group">
                  Continue to WhatsApp
                  <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
