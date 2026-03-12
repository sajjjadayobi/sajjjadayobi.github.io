import { useState } from 'react'
import { motion } from 'framer-motion'
import { IoMenu, IoHeartOutline, IoHeart, IoSunnyOutline } from 'react-icons/io5'

const InvitationCard = () => {
  const [isFavorited, setIsFavorited] = useState(false)

  const handleBalad = () => {
    // Balad deep link - Search for Sadra Garden in Shahriar
    // Deep link format: balad://search?q=query
    // Web fallback: https://balad.ir/search?q=query
    const searchQuery = encodeURIComponent('باغ تالار صدرا شهریار باغستان');
    const baladDeepLink = `balad://search?q=${searchQuery}`;
    const baladWebLink = `https://balad.ir/search?q=${searchQuery}`;

    // Try deep link first, fallback to web
    window.location.href = baladDeepLink;
    setTimeout(() => {
      window.open(baladWebLink, '_blank');
    }, 500);
  }

  const handleNeshan = () => {
    // Neshan deep link - Search for Sadra Garden in Shahriar
    // Deep link format: neshan://search?term=query
    // Web fallback: https://neshan.org/search?term=query
    const searchQuery = encodeURIComponent('باغ تالار صدرا شهریار باغستان');
    const neshanDeepLink = `neshan://search?term=${searchQuery}`;
    const neshanWebLink = `https://neshan.org/search?term=${searchQuery}`;

    // Try deep link first, fallback to web
    window.location.href = neshanDeepLink;
    setTimeout(() => {
      window.open(neshanWebLink, '_blank');
    }, 500);
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Centered container with max-width for phones */}
      <div className="relative min-h-screen w-full max-w-[430px] flex flex-col">

        {/* Top Bar with Menu and Heart */}
        <div className="relative px-6 pt-4 pb-2 flex items-center justify-between z-20">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <IoMenu className="w-6 h-6 text-white" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
          </motion.button>

          {/* Heart button with circle background like original */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setIsFavorited(!isFavorited)}
            className="glass-effect w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95"
          >
            {isFavorited ? (
              <IoHeart className="w-6 h-6 text-red-500" style={{ filter: 'drop-shadow(0 2px 4px rgba(239,68,68,0.6))' }} />
            ) : (
              <IoHeartOutline className="w-6 h-6 text-white" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
            )}
          </motion.button>
        </div>

        {/* Location Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-6 mb-1"
        >
          <p className="text-white/70 text-lg tracking-[0.2em] font-semibold mb-2"
             style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)', fontFamily: 'Vazirmatn, sans-serif' }}>
            باغ صدرا،‌ شهریار،‌ تهران
          </p>
          {/* Decorative element */}
          <div className="flex justify-center">
            <svg width="40" height="8" viewBox="0 0 40 8" className="opacity-50">
              <line x1="0" y1="4" x2="16" y2="4" stroke="white" strokeWidth="0.5"/>
              <circle cx="20" cy="4" r="1.5" fill="white"/>
              <line x1="24" y1="4" x2="40" y2="4" stroke="white" strokeWidth="0.5"/>
            </svg>
          </div>
        </motion.div>

        {/* Names Section */}
        <div className="px-8 flex-1 flex flex-col justify-start pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-center mb-8"
          >
            <h1
              className="text-7xl text-amber-50 font-normal leading-tight mb-2"
              style={{
                fontFamily: 'Amiri, serif',
                textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.7)',
                letterSpacing: '0.05em'
              }}
            >
              گلبرگ
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="my-3"
            >
              <span
                className="text-amber-50/80 text-3xl font-light"
                style={{
                  fontFamily: 'Vazirmatn, sans-serif',
                  textShadow: '0 2px 10px rgba(0,0,0,0.7)'
                }}
              >
                و
              </span>
            </motion.div>

            <h2
              className="text-7xl text-amber-50 font-normal leading-tight"
              style={{
                fontFamily: 'Amiri, serif',
                textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.7)',
                letterSpacing: '0.05em'
              }}
            >
              سجاد
            </h2>
          </motion.div>

          {/* Flying Birds */}
          <div className="absolute top-64 left-0 right-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-black/30 text-xs"
                style={{
                  left: `${45 + i * 8}%`,
                  top: `${i * 5}px`,
                }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 100, opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  delay: i * 1.5
                }}
              >
                ᐯ
              </motion.div>
            ))}
          </div>

          {/* Invitation Message with Decorative Diamonds */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center mb-12"
          >
            {/* Top diamond */}
            <div className="flex justify-center mb-2">
              <svg width="12" height="12" viewBox="0 0 12 12">
                <rect x="6" y="0" width="6" height="6" transform="rotate(45 6 6)" fill="white" opacity="0.4"/>
              </svg>
            </div>

            <p
              className="text-white/80 text-lg tracking-wider font-normal leading-relaxed"
              style={{
                fontFamily: 'Vazirmatn, sans-serif',
                textShadow: '0 2px 8px rgba(0,0,0,0.8)'
              }}
            >
              شما را به جشن عشق خود
            </p>
            <p
              className="text-white/80 text-lg tracking-wider font-normal leading-relaxed"
              style={{
                fontFamily: 'Vazirmatn, sans-serif',
                textShadow: '0 2px 8px rgba(0,0,0,0.8)'
              }}
            >
              دعوت می‌کنیم.
            </p>

            {/* Bottom diamond */}
            <div className="flex justify-center mt-2">
              <svg width="12" height="12" viewBox="0 0 12 12">
                <rect x="6" y="0" width="6" height="6" transform="rotate(45 6 6)" fill="white" opacity="0.4"/>
              </svg>
            </div>
          </motion.div>

          {/* Weather + Location - In single horizontal row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="mb-8 px-6"
          >
            <div className="flex items-center justify-between gap-4">
              {/* LEFT: Weather - NO CONTAINER */}
              <div className="flex-1">
                <p
                  className="text-white text-base font-light mb-1"
                  style={{
                    fontFamily: 'Vazirmatn, sans-serif',
                    textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                  }}
                >
                  ۹ خرداد ۱۴۰۳
                </p>
                <div className="flex items-center space-x-2 mb-1">
                  <span
                    className="text-white text-5xl font-extralight"
                    style={{
                      fontFamily: 'Vazirmatn, sans-serif',
                      textShadow: '0 4px 12px rgba(0,0,0,0.9)'
                    }}
                  >
                    ۲۴°
                  </span>
                  <IoSunnyOutline className="w-8 h-8 text-amber-400" style={{ filter: 'drop-shadow(0 2px 8px rgba(251,191,36,0.6))' }} />
                </div>
                <p
                  className="text-white/80 text-xs font-light"
                  style={{
                    fontFamily: 'Vazirmatn, sans-serif',
                    textShadow: '0 2px 6px rgba(0,0,0,0.8)'
                  }}
                >
                  عصر تهران
                </p>
              </div>

              {/* RIGHT: Location buttons - text outside, icons in container */}
              <div className="flex flex-col items-center">
                <p
                  className="text-white text-sm tracking-wide text-center mb-2 font-bold"
                  style={{
                    fontFamily: 'Vazirmatn, sans-serif',
                    textShadow: '0 2px 6px rgba(0,0,0,0.8)'
                  }}
                >
                  مسیریابی
                </p>
                <div
                  className="rounded-[2rem] px-2 py-2"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {/* Balad Button - Circular */}
                    <button
                      onClick={handleBalad}
                      className="glass-effect w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95"
                      aria-label="Balad"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                              fill="white" opacity="0.9" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))' }}/>
                      </svg>
                    </button>

                    {/* Neshan Button - Circular */}
                    <button
                      onClick={handleNeshan}
                      className="glass-effect w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95"
                      aria-label="Neshan"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"
                              fill="white" opacity="0.9" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))' }}/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Congrats Button with Golden Glow - Even more rounded */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="mb-6 px-6"
          >
            <button
              className="liquid-glass w-full py-4 rounded-[3rem] text-white font-light tracking-widest text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden hover:bg-white/10"
              style={{
                fontFamily: 'Vazirmatn, sans-serif',
                textShadow: '0 2px 6px rgba(0,0,0,0.7)'
              }}
            >
              تبریک
            </button>
          </motion.div>

          {/* Bottom Home Indicator - NO CHEVRON */}
          <div className="mt-auto pb-2">
            <div className="flex justify-center pb-2">
              <div className="w-32 h-1 bg-white/30 rounded-full" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.4)' }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default InvitationCard
