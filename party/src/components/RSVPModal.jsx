import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose, IoCheckmarkCircle } from 'react-icons/io5'

const RSVPModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: 'yes',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Here you would typically send the data to a backend
    console.log('RSVP Data:', formData)

    // Show success message
    setSubmitted(true)

    // Close modal after 2 seconds
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md glass-effect-strong rounded-3xl p-8 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close"
          >
            <IoClose className="w-6 h-6 text-white" />
          </button>

          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="font-playfair text-4xl text-white mb-2 italic">RSVP</h2>
                <p className="text-white/60 text-sm">Please let us know if you can join us</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white/70 text-sm mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white/70 text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Attending */}
                <div>
                  <label className="block text-white/70 text-sm mb-2">
                    Will you attend? *
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex-1">
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formData.attending === 'yes'}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-center cursor-pointer peer-checked:bg-amber-500/30 peer-checked:border-amber-400/50 transition-all">
                        <span className="text-white text-sm">Yes, I'll be there!</span>
                      </div>
                    </label>
                    <label className="flex-1">
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formData.attending === 'no'}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-center cursor-pointer peer-checked:bg-white/20 peer-checked:border-white/40 transition-all">
                        <span className="text-white text-sm">Can't make it</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Number of Guests */}
                {formData.attending === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <label htmlFor="guests" className="block text-white/70 text-sm mb-2">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors"
                    >
                      <option value="1" className="bg-gray-800">1 Guest</option>
                      <option value="2" className="bg-gray-800">2 Guests</option>
                      <option value="3" className="bg-gray-800">3 Guests</option>
                      <option value="4" className="bg-gray-800">4+ Guests</option>
                    </select>
                  </motion.div>
                )}

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white/70 text-sm mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    placeholder="Share your wishes or dietary requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-500/80 to-amber-600/80 hover:from-amber-500 hover:to-amber-600 text-white font-light tracking-wider uppercase text-sm rounded-full transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                  Submit RSVP
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center py-12"
            >
              <IoCheckmarkCircle className="w-20 h-20 text-green-400 mx-auto mb-4" />
              <h3 className="font-playfair text-3xl text-white mb-2">Thank You!</h3>
              <p className="text-white/70">We've received your RSVP</p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default RSVPModal
