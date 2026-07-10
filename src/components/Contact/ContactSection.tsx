'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ContactSection() {

  return (
    <section
      id="rsvp"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Same fixed background as countdown — seamless scroll */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/BackgroundImages/back02.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Soft dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[6px] uppercase mb-4 block text-amber-400"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            — We'd Love For You To Join Us —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-normal text-white"
            style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            RSVP
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/60"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Please kindly respond by October 1st, 2026.
          </motion.p>
        </div>

        {/* Transparent Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}
        >
          <form className="max-w-xl mx-auto space-y-8">

            {/* Full Name */}
            <div>
              <label
                className="block text-xs uppercase tracking-[3px] text-white/60 mb-3"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Full Name(s)
              </label>
              <input
                type="text"
                placeholder="John & Jane Doe"
                className="w-full bg-transparent border-b border-white/30 py-3 text-center focus:outline-none focus:border-amber-400 text-lg transition-colors text-white placeholder-white/30"
                style={{ fontFamily: '"Playfair Display", serif' }}
              />
            </div>

            {/* Attend? */}
            <div className="pt-2">
              <label
                className="block text-xs uppercase tracking-[3px] text-white/60 mb-5"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Will You Attend?
              </label>
              <div className="flex justify-center gap-8 flex-wrap">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="attend" className="w-4 h-4 accent-amber-400" />
                  <span className="text-lg text-white" style={{ fontFamily: '"Playfair Display", serif' }}>
                    Joyfully Accept
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="attend" className="w-4 h-4 accent-amber-400" />
                  <span className="text-lg text-white" style={{ fontFamily: '"Playfair Display", serif' }}>
                    Regretfully Decline
                  </span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="pt-2">
              <label
                className="block text-xs uppercase tracking-[3px] text-white/60 mb-3"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Message / Dietary Requirements
              </label>
              <textarea
                rows={3}
                className="w-full bg-transparent border-b border-white/30 py-3 text-center focus:outline-none focus:border-amber-400 text-lg transition-colors text-white placeholder-white/30 resize-none"
                style={{ fontFamily: '"Playfair Display", serif' }}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="button"
                className="px-14 py-4 tracking-[3px] uppercase text-sm transition-all w-full md:w-auto rounded-full font-semibold"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  background: 'linear-gradient(135deg, #b8860b, #ffd700, #daa520)',
                  color: '#1a1a1a',
                  boxShadow: '0 0 20px rgba(255,215,0,0.3)',
                }}
              >
                Send RSVP
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
