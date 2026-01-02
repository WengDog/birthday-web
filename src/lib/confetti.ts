import confetti from "canvas-confetti";

export function burstConfetti() {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
    colors: ["#FF8AC9", "#FFD1F2", "#FFF3C7", "#FFB6B9", "#A5A6F6"],
  });
}
