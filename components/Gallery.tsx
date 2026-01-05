
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Photo } from '../types';

interface GalleryProps {
  photos: Photo[];
  title: string;
  subtitle?: string;
}

const Gallery: React.FC<GalleryProps> = ({ photos, title, subtitle }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-slate-800 mb-2 text-center">{title}</h2>
        {subtitle && <p className="text-slate-500 text-center mb-10 text-sm">{subtitle}</p>}
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-xl bg-slate-100 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(photo.url)}
            >
              <img 
                src={photo.url} 
                alt={photo.alt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <p className="text-[10px] text-slate-400 mt-6 text-center italic">
          *Resultados podem variar de pessoa para pessoa.
        </p>
      </div>

      {/* Basic Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Ampliada" 
            className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
