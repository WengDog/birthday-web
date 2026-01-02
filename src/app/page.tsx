
"use client";
import React from "react";
import Hero from "../components/Hero";
import PhotoGallery from "../components/PhotoGallery";
import Gacha, { GachaCard } from "../components/Gacha";
import Footer from "../components/Footer";
import { burstConfetti } from "../lib/confetti";

const PHOTOS = [
  "/photos/photo1.jpg",
  "/photos/photo2.jpg",
  "/photos/photo3.jpg",
  "/photos/photo4.jpg",
  // Add more as needed
];

const GACHA_CARDS: GachaCard[] = [
  { id: 1, front: "🎁", gift: "A Big Hug! 🤗" },
  { id: 2, front: "🎉", gift: "Surprise Snack 🍫" },
  { id: 3, front: "🧸", gift: "Cuddle Bear 🧸" },
  { id: 4, front: "🌟", gift: "Wish Token 🌠" },
  { id: 5, front: "🍰", gift: "Cake Coupon 🍰" },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero
        name="[Person Name Here]"
        message="Wishing you joy, love, and happiness today and always ❤️"
        musicSrc="/music/bgm.mp3"
        onConfetti={burstConfetti}
      />
      <PhotoGallery photos={PHOTOS} />
      <Gacha cards={GACHA_CARDS} />
      <Footer />
    </main>
  );
}
