(() => {
  // Amélie soundtrack autoplay with graceful fallback
  const tryAutoplay = () => {
    const audio = document.getElementById('amelie-audio');
    if (!audio) return;
    audio.volume = 0.5;
    const play = () => audio.play().catch(() => {});
    play();
    const enable = () => {
      play();
      window.removeEventListener('click', enable);
      window.removeEventListener('touchstart', enable);
    };
    window.addEventListener('click', enable, { once: true });
    window.addEventListener('touchstart', enable, { once: true });
  };

  document.addEventListener('DOMContentLoaded', () => {
    tryAutoplay();
  });
})(); 