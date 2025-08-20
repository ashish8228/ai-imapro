'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Research', href: '#research' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Social Links */}

        {/* Info Grid */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <h4 className="font-bold text-amber-400 mb-4 text-lg">Contact</h4>
            <div className="space-y-2 text-slate-400">
              <p className="text-sm">info@indiaaiinstitute.edu</p>
              <p className="text-sm">+91 98765 43210</p>
              <p className="text-sm">admissions@indiaaiinstitute.edu</p>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="font-bold text-amber-400 mb-4 text-lg">Location</h4>
            <div className="space-y-2 text-slate-400">
              <p className="text-sm">Bangalore, Karnataka</p>
              <p className="text-sm">India's Silicon Valley</p>
              <p className="text-sm">Tech Hub Campus</p>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-bold text-amber-400 mb-4 text-lg">Programs</h4>
            <div className="space-y-2 text-slate-400">
              <p className="text-sm">AI & ML Certification</p>
              <p className="text-sm">Deep Learning Bootcamp</p>
              <p className="text-sm">Industry Partnerships</p>
            </div>
          </div>
        </motion.div> */}

        {/* Quick Links */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {quickLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-slate-400 hover:text-amber-400 transition-colors duration-300 text-sm font-medium"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div> */}

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="border-t border-white/5 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2025 India’s First AI Filmmaking Institute. All rights reserved.  
              {/* <a href="#privacy" className="text-amber-400 hover:underline ml-1">Privacy Policy</a> | 
              <a href="#terms" className="text-amber-400 hover:underline ml-1">Terms of Service</a> */}
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <span>Powered by</span>
              <span className="text-amber-400 font-semibold">Imapro</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
              animate={{
                y: [0, -120, 0],
                x: [0, Math.random() * 60 - 30, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: '100%'
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}