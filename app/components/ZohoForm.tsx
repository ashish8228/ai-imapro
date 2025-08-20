'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ZohoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    experience: '',
    city: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsLoading(false)
    setIsSubmitted(true)
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', interest: '', experience: '', city: '' })
    }, 4000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
          >
            <span className="gradient-text">Secure Your Spot</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto rounded-full mb-8"></div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            Join India's pioneering AI education revolution. Be among the first to experience 
            world-class artificial intelligence training with exclusive early access benefits.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="modern-card p-10 md:p-16 max-w-4xl mx-auto relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.05)_0%,transparent_50%)]"></div>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.05] transition-all duration-500 text-lg"
                    placeholder="Enter your full name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.05] transition-all duration-500 text-lg"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.05] transition-all duration-500 text-lg"
                    placeholder="+91 98765 43210"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label htmlFor="city" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.05] transition-all duration-500 text-lg"
                    placeholder="Your city"
                  />
                </motion.div>
              </div>

              {/* Preferences */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label htmlFor="interest" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                    Primary Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/[0.02] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.05] transition-all duration-500 text-lg"
                  >
                    <option value="" className="bg-slate-900">Select your interest</option>
                    <option value="machine-learning" className="bg-slate-900">Machine Learning</option>
                    <option value="deep-learning" className="bg-slate-900">Deep Learning</option>
                    <option value="nlp" className="bg-slate-900">Natural Language Processing</option>
                    <option value="computer-vision" className="bg-slate-900">Computer Vision</option>
                    <option value="robotics" className="bg-slate-900">AI & Robotics</option>
                    <option value="data-science" className="bg-slate-900">Data Science & AI</option>
                    <option value="ai-ethics" className="bg-slate-900">AI Ethics & Governance</option>
                    <option value="general" className="bg-slate-900">General AI Knowledge</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label htmlFor="experience" className="block text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                    Experience Level
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/[0.02] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-amber-400/50 focus:bg-white/[0.05] transition-all duration-500 text-lg"
                  >
                    <option value="" className="bg-slate-900">Select your level</option>
                    <option value="complete-beginner" className="bg-slate-900">Complete Beginner</option>
                    <option value="some-knowledge" className="bg-slate-900">Some Knowledge</option>
                    <option value="intermediate" className="bg-slate-900">Intermediate</option>
                    <option value="advanced" className="bg-slate-900">Advanced</option>
                    <option value="professional" className="bg-slate-900">Professional</option>
                  </select>
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="pt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full glass-button group text-center py-5 text-xl font-bold animate-glow relative overflow-hidden"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-amber-400/30 border-t-amber-400 rounded-full animate-spin"></div>
                      <span>Securing Your Spot...</span>
                    </div>
                  ) : (
                    <span className="relative z-10">Join the Waitlist</span>
                  )}
                </motion.button>
              </motion.div>

              {/* Privacy Notice */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-sm text-slate-400 text-center leading-relaxed"
              >
                By joining our waitlist, you agree to receive updates about India's First AI Institute. 
                We respect your privacy and will never share your information. 
                <span className="text-amber-400 hover:underline cursor-pointer ml-1">Privacy Policy</span>
              </motion.p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16 relative z-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-8xl mb-8"
              >
                🎉
              </motion.div>
              <h3 className="text-4xl font-black gradient-text mb-6">
                Welcome to the Future!
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Thank you for joining India's First AI Institute waitlist. 
                You'll receive exclusive updates and early access to our revolutionary programs.
              </p>
              <div className="flex items-center justify-center gap-2 text-amber-400">
                <span className="text-2xl">✨</span>
                <span className="font-semibold">Confirmation email sent!</span>
                <span className="text-2xl">✨</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Zoho Integration Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="modern-card p-8 max-w-lg mx-auto">
            <h4 className="text-xl font-bold gradient-text mb-3">
              Powered by Advanced Analytics
            </h4>
            <p className="text-slate-400 leading-relaxed">
              We use Zoho's enterprise-grade analytics and form management 
              to ensure the best possible experience for our future students.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}