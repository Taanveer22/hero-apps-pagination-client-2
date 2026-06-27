import confetti from 'canvas-confetti';

export default function fireConfetti(duration = 3000) {
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#DAA520', '#392f5a'],
    });

    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#DAA520', '#392f5a'],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
