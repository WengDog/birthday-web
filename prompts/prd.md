# Birthday Web — PRD
## 1 Product Overview
Single-page birthday website with:
- Greeting + music + confetti
- Memory photos
- 1-time gacha surprise

## 2 Platform
Web
Mobile-first responsive
Static
Built with Next.js
Hosted on Netlify (Free)

## 3 Core Features
Section 1 — Hero Birthday Wish
Includes:
- Big birthday heading
- Personalized message
- Cute birthday themed UI

Behavior
- Background music auto plays (or user taps Play on mobile)
- Confetti burst animation triggers automatically on load
- Optional “Play Again Confetti” button (not required)

Section 2 — Photo Gallery
- Scrollable image gallery
- Clean modern layout
- About 4–10 photos
- Rounded cards + shadow

Section 3 — Gacha Gift Game
Behavior
- 3–6 cards appear
- User can tap only once per card
- Card flips and reveals random gift
- Once flipped, card stays flipped
- User can flip the other remaining cards if desired
- No reset / restart feature

Purpose
- Make the gift feel meaningful
- Reduce repetitive play
- Simpler UX

## 4 User Flow
1️⃣ User opens site
2️⃣ Greeting appears
3️⃣ Confetti bursts
4️⃣ Music plays
5️⃣ User scrolls to photos
6️⃣ User scrolls to gacha
7️⃣ Picks card → sees surprise
8️⃣ Done

## 5 Non-Functional Requirements
Mobile-first responsive
Smooth animation
Fast loading
Static only, no backend

## 6 Tech Stack
- Next.js 14
- TailwindCSS
- Confetti library (canvas-confetti)
- HTML audio for background music

## 7 Folder Structure
/app
  page.tsx
  globals.css
/public/photos
/public/music/bgm.mp3

## 8 Deployment — Netlify
Use static export:
npm run build
npx next export
Uploads /out folder to Netlify Drop.