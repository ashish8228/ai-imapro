'use client'
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from 'framer-motion'


const Ctabutton = () => {
  return (
    
    <motion.div initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
      {/* CTA button */}
      <button className='flex items-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300  font-semibold text-gray-800 rounded-lg cursor-pointer'><a href="https://t.me/imaproai" className="flex gap-2 items-center text-sm sm:text-md px-8 py-3 ">Join our Telegram community <FaTelegramPlane size={20}/></a></button>
    </motion.div>
  )
}

export default Ctabutton