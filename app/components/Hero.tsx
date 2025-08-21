'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-10-01T00:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        

        {/* Main Title - Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16 z-10 relative bg-transparent"
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              COMING SOON
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            India’s First AI Filmmaking Institute
          </motion.p>
        </motion.div>

        

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.1] rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-6 sm:p-10 max-w-4xl mx-auto relative overflow-hidden z-10"
        >
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="backdrop-blur-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.1] rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-4 sm:p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent mb-2">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating AI Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* AI Brain Icon */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-32 left-16 w-16 sm:w-20 h-16 sm:h-20 backdrop-blur-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.1] rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center justify-center text-xl sm:text-3xl"
          >
            🧠
          </motion.div>

          {/* Neural Network Icon */}
          <motion.div
            animate={{
              y: [0, 25, 0],
              rotate: [0, -8, 3, 0],
              scale: [1, 0.9, 1.05, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-48 right-20 w-14 sm:w-16 h-14 sm:h-16 backdrop-blur-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.1] rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center justify-center text-lg sm:text-2xl"
          >
            ⚡
          </motion.div>

          {/* Robot Icon */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute bottom-16 left-24 w-16 sm:w-18 h-16 sm:h-18 backdrop-blur-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.1] rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center justify-center text-lg sm:text-2xl p-2 sm:p-4"
          >
            🤖
          </motion.div>

          {/* Data Icon */}
          <motion.div
            animate={{
              y: [0, -35, 0],
              rotate: [0, -10, 5, 0]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-14 right-16 w-14 sm:w-16 h-14 sm:h-16 backdrop-blur-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.1] rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex items-center justify-center text-lg sm:text-xl"
          >
            🎁
          </motion.div>
        </div>
      </div>
    </section>
  )
}