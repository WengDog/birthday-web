import React from "react";

interface PhotoGalleryProps {
  photos: string[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <section className="py-10 bg-white/80">
      <h2 className="text-2xl md:text-3xl font-bold text-pink-500 mb-6 text-center font-title">Memories <span role="img" aria-label="camera">📸</span></h2>
      <div className="overflow-x-auto flex gap-4 px-4 md:justify-center">
        {photos.map((src, idx) => (
          <div
            key={src}
            className="min-w-[180px] max-w-[220px] rounded-2xl shadow-lg bg-white p-2 flex-shrink-0 transition-transform hover:scale-105"
          >
            <img
              src={src}
              alt={`Memory ${idx + 1}`}
              className="rounded-xl object-cover w-full h-40 md:h-56"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
