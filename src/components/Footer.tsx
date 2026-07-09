'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaInstagram, FaFacebookF, FaPinterest } from 'react-icons/fa'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-40px' })

  return (
    <footer
      ref={ref}
      className="relative py-16 px-6 text-center bg-stone-100 border-t border-stone-200 text-stone-500"
    >
      <div className="max-w-4xl mx-auto">
        {/* Social icons */}
        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {[FaFacebookF, FaInstagram, FaPinterest].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              className="p-3 transition-all duration-200 text-stone-400 hover:text-stone-800"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ delay: 0.1 + i * 0.08, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Names */}
        <motion.div
          style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', color: '#1c1917' }}
          className="mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          Emma & Liam
        </motion.div>

        {/* Copyright */}
        <motion.p
          style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.8rem', letterSpacing: '2px' }}
          className="uppercase tracking-widest text-stone-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.45 }}
        >
          © {new Date().getFullYear()} Emma & Liam. We can't wait to celebrate with you.
        </motion.p>
      </div>
    </footer>
  )
}
