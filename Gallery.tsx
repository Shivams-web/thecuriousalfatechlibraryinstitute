import { motion } from 'motion/react';
import { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Classroom', 'Library', 'Events', 'Students'];

  const images = [
    { url: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b081?auto=format&fit=crop&q=80&w=800', category: 'Classroom', title: 'Modern Computer Lab' },
    { url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800', category: 'Library', title: 'Peaceful Study Zone' },
    { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', category: 'Students', title: 'Collaborative Learning' },
    { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800', category: 'Events', title: 'Annual Tech Seminar' },
    { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800', category: 'Students', title: 'Student Success Celebration' },
    { url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800', category: 'Library', title: 'Extensive Book Collection' },
    { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', category: 'Classroom', title: 'Hands-on Training Session' },
    { url: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800', category: 'Events', title: 'Workshop on AI & ML' },
  ];

  const filteredImages = images.filter(img => activeFilter === 'All' || img.category === activeFilter);

  return (
    <main className="pt-32">
      {/* Header Section */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="section-title">
            <span className="text-blue-700 font-bold text-sm uppercase tracking-widest mb-3 block">Visual Journey</span>
            <h1>Our Campus Gallery</h1>
            <p>Take a look at our state-of-the-art facilities, vibrant student life, and the inspiring environment we've built for you.</p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeFilter === filter ? 'bg-blue-700 text-white shadow-lg shadow-blue-900/20' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.url}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(img.url)}
              >
                <img
                  src={img.url}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={img.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">{img.category}</span>
                  <h4 className="text-white font-bold text-lg leading-tight">{img.title}</h4>
                  <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
            alt="Full view"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
