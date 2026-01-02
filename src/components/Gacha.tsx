import React, { useState } from "react";

export interface GachaCard {
  id: number;
  front: string; // emoji or image
  gift: string; // text + emoji
}

interface GachaProps {
  cards: GachaCard[];
}

export default function Gacha({ cards }: GachaProps) {
  const [flipped, setFlipped] = useState<boolean[]>(Array(cards.length).fill(false));

  const handleFlip = (idx: number) => {
    if (!flipped[idx]) {
      setFlipped(f => f.map((v, i) => (i === idx ? true : v)));
    }
  };

  return (
    <section className="py-10 bg-pink-50">
      <h2 className="text-2xl md:text-3xl font-bold text-pink-500 mb-2 text-center font-title">Birthday Gacha <span role="img" aria-label="gacha">🎰</span></h2>
      <p className="text-center text-gray-700 mb-6">pick one card and reveal your surprise <span role="img" aria-label="gift">🎁</span></p>
      <div className="flex justify-center gap-4 px-4">
        {cards.map((card, idx) => (
          <div
            key={card.id}
            className="relative w-28 h-40 perspective"
            onClick={() => handleFlip(idx)}
            style={{ cursor: flipped[idx] ? "default" : "pointer" }}
          >
            <div className={`absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] ${flipped[idx] ? "rotate-y-180" : ""}`}>
              {/* Front */}
              <div className="absolute inset-0 bg-pink-200 rounded-2xl shadow-lg flex flex-col items-center justify-center text-4xl font-title [backface-visibility:hidden] border-2 border-pink-300">
                <span>{card.front}</span>
                <span className="text-xs mt-2 text-pink-600">Tap me!</span>
              </div>
              {/* Back */}
              <div className="absolute inset-0 bg-yellow-100 rounded-2xl shadow-lg flex flex-col items-center justify-center text-lg font-title rotate-y-180 [backface-visibility:hidden] border-2 border-yellow-200">
                <span className="text-2xl mb-2">{card.gift}</span>
                <span className="text-pink-500 font-bold">Surprise!</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
