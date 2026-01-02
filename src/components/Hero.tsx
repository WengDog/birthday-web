"use client";

import React, { useRef } from "react";

interface HeroProps {
  name: string;
  message: string;
  musicSrc: string;
  onConfetti: () => void;
}

export default function Hero({ name, message, musicSrc, onConfetti }: HeroProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = React.useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  React.useEffect(() => {
    // Auto confetti burst on mount
    onConfetti();
    // Try to autoplay music (may be blocked on mobile)
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setPlaying(true)).catch(() => {});
      }
    }
  }, [onConfetti]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-pink-200 via-pink-300 to-purple-200 overflow-hidden text-center px-4 py-12">
      {/* Balloons and sparkles can be added here as absolutely positioned SVGs or images */}
      <h1 className="text-4xl md:text-6xl font-bold text-pink-500 mb-2 drop-shadow-lg font-title animate-fadein">
        HAPPY BIRTHDAY <span role="img" aria-label="cake">🎂</span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-pink-700 mb-4 font-title animate-fadein">
        {name}
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fadein">
        {message}
      </p>
      <div className="flex items-center gap-4 mb-4 animate-fadein">
        <button
          className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300 font-body"
          onClick={handlePlay}
          disabled={playing}
        >
          {playing ? "Playing..." : <><span className="mr-2">►</span> Play Music</>}
        </button>
        <span className="text-yellow-500 font-semibold">Confetti Auto Burst <span role="img" aria-label="confetti">🎇</span></span>
      </div>
      <audio ref={audioRef} src={musicSrc} loop preload="auto" />
    </section>
  );
}
