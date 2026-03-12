import { motion } from 'framer-motion'

const Background = () => {
  // Generate sparkle particles with varied properties
  const generateSparkles = (count) => {
    return [...Array(count)].map((_, i) => {
      const size = Math.random() * 3 + 1 // 1-4px
      const isGolden = Math.random() > 0.3 // 70% golden, 30% white
      const color = isGolden
        ? `rgba(251, 191, 36, ${0.3 + Math.random() * 0.4})` // amber-400 with varied opacity
        : `rgba(255, 255, 255, ${0.2 + Math.random() * 0.3})` // white with varied opacity

      return {
        id: i,
        size,
        color,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 3,
        moveDistance: 40 + Math.random() * 40, // 40-80px movement
      }
    })
  }

  const sparkles = generateSparkles(80)

  return (
    <div className="fixed inset-0 w-full h-full">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/bg-design.png"
          alt="Garden Mansion"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlays for depth - reduced opacity for more background visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Vignette effect - slightly reduced for more clarity */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
      }} />

      {/* Animated sparkle particles - LOTS of them! */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute rounded-full"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              backgroundColor: sparkle.color,
              boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
            }}
            animate={{
              opacity: [0, 0.8, 0.4, 0.9, 0],
              scale: [0, 1.5, 1, 1.8, 0],
              y: [0, -sparkle.moveDistance * 0.3, -sparkle.moveDistance * 0.6, -sparkle.moveDistance],
              x: [0, Math.sin(sparkle.id) * 10, Math.cos(sparkle.id) * 10, 0],
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Infinity,
              delay: sparkle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Additional large golden glow particles for ambient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              backgroundColor: `rgba(251, 191, 36, ${0.05 + Math.random() * 0.1})`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Background
