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

  // Funny Easter-egg: triple-click on the name line
  const initPrank = () => {
    const namesEl = document.querySelector('.names');
    if (!namesEl) return;

    let clicks = 0;
    namesEl.addEventListener('click', () => {
      clicks += 1;
      if (clicks === 3) {
        // Remove address box & buttons
        document.querySelector('.info-box')?.remove();
        document.querySelector('.actions')?.remove();

        // Show playful message
        const msg = document.createElement('p');
        msg.className = 'prank-message';
        msg.textContent = 'شیطونی نکن بچه، گلبرگ برای خودمه';
        namesEl.insertAdjacentElement('afterend', msg);

        // Prevent further triggering
        namesEl.style.pointerEvents = 'none';
      }
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    tryAutoplay();
    initPrank();
  });
})(); 