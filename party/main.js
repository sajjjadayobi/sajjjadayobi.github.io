(() => {
  // Amélie soundtrack autoplay with graceful fallback
  const tryAutoplay = () => {
    const audio = document.getElementById('amelie-audio');
    if (!audio) return;
    audio.volume = 0.15;
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

  // Theme toggle controller
  const initThemeToggle = () => {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (!toggleBtn) return;

    const setTheme = (dark) => {
      document.body.classList.toggle('dark', dark);
      toggleBtn.textContent = dark ? '💗' : '💚';
    };

    // Initial state
    const saved = localStorage.getItem('wedding-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = saved ? saved === 'dark' : prefersDark;
    setTheme(dark);

    toggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark');
      toggleBtn.textContent = isDark ? '💗' : '💚';
      localStorage.setItem('wedding-theme', isDark ? 'dark' : 'light');
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    tryAutoplay();
    initThemeToggle();
  });
})(); 