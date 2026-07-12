'use client'

import { motion } from 'framer-motion'

export default function ContactSection() {

  const openGoogleForm = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSf-sgBdTiKkmx44NBS1Int5JOqQw4p5eqMBaLzDiwH9WT7zUQ/viewform?usp=publish-editor',
      '_blank'
    )
  }

  return (
    <section
      id="rsvp"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Background removed, global background will show through */}
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
          className="rounded-2xl p-8 md:p-16 text-center"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}
        >
          <div className="max-w-xl mx-auto space-y-8">

            {/* Message */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              <p
                className="text-white/90 text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                We humbly request your kind presence at our wedding celebration.
              </p>

              <p
                className="text-white/80 text-base md:text-lg leading-relaxed"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Please fill out the RSVP form by clicking the button below so we can prepare a memorable celebration just for you and your loved ones.
              </p>

              <p
                className="text-amber-300 text-sm md:text-base font-semibold tracking-wide"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Kindly respond by October 1st, 2026
              </p>
            </motion.div>

            {/* Confirm Attendance Button - Gold Transparent */}
            <div className="pt-8">
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 0 40px rgba(212,175,55,0.6), 0 0 60px rgba(255,215,0,0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openGoogleForm}
                className="px-12 md:px-20 py-5 md:py-6 tracking-[4px] uppercase text-sm md:text-base font-bold rounded-full transition-all inline-block border-2"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  background: 'rgba(212, 175, 55, 0.2)',
                  borderColor: '#ffd700',
                  color: '#ffd700',
                  boxShadow: '0 0 30px rgba(212,175,55,0.4), inset 0 0 20px rgba(255,215,0,0.1)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                Confirm Attendance
              </motion.button>

              <p
                className="text-white/50 text-xs md:text-sm mt-6"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Click the button to fill out your RSVP details
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
