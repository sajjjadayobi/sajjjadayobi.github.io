import { motion } from 'framer-motion'
import Background from './components/Background'
import InvitationCard from './components/InvitationCard'

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Garden Scene */}
      <Background />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full max-w-md"
        >
          <InvitationCard />
        </motion.div>
      </div>
    </div>
  )
}

export default App
