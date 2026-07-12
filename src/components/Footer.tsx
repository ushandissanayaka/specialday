'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

export default function Footer() {

  return (
    <footer className="relative py-20 px-6 text-center overflow-hidden">

      {/* Background: desktop uses back02.png | mobile uses moblile02.png */}
      {/* Desktop layer */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: "url('/images/BackgroundImages/back02.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
        }}
      />
      {/* Mobile layer — moblile02.png sized for phone screens */}
      <div
        className="absolute inset-0 block md:hidden"
        style={{
          backgroundImage: "url('/images/BackgroundImages/moblile02.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

        {/* Decorative top line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-10 w-full justify-center"
        >
          <div className="h-px w-24 bg-amber-400/50" />
          <FaHeart className="text-amber-400 text-sm" />
          <div className="h-px w-24 bg-amber-400/50" />
        </motion.div>

        {/* Invite line — larger size */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/85 mb-5 leading-relaxed italic"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            letterSpacing: '0.03em',
          }}
        >
          Together with their families, invite you to their
        </motion.p>

        {/* Names — large bold */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 60 }}
          className="mb-4"
        >
          <h2
            className="text-white font-bold leading-tight"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              letterSpacing: '0.06em',
              textShadow: '0 0 40px rgba(255,215,0,0.25)',
            }}
          >
            Kasuni &amp; Dasun
          </h2>
        </motion.div>

        {/* Wedding label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-amber-400 uppercase tracking-[6px] text-sm mb-12"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          Wedding Celebration
        </motion.p>

        {/* Copyright */}
        <motion.p
          style={{ fontFamily: 'Lato, sans-serif', fontSize: '0.75rem', letterSpacing: '2px' }}
          className="uppercase text-white/35"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ delay: 0.5 }}
        >
          © {new Date().getFullYear()} Kasuni &amp; Dasun · Made with ♥
        </motion.p>
      </div>
    </footer>
  )
}
