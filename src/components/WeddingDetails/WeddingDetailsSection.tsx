'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 60, 
      damping: 15, 
      delay: i * 0.15 
    },
  }),
}

const DETAILS = [
  {
    icon: '📅',
    label: 'Date',
    value: 'November 10, 2026',
    sub: 'Monday',
  },
  {
    icon: '⏰',
    label: 'Time',
    value: '8:30 AM Onwards',
    sub: 'Ceremony begins at 9:00 AM',
  },
  {
    icon: '📍',
    label: 'Venue',
    value: 'Bolgoda Paradise Hotel',
    sub: 'Bandaragama, Sri Lanka',
  },
  {
    icon: '🎊',
    label: 'Dress Code',
    value: 'Formal Attire',
    sub: 'Elegant & Graceful',
  },
]

export default function WeddingDetailsSection() {
  return (
    <section
      id="details"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-24"
    >
      {/* Dark overlay to ensure readability against the global fixed background */}
      <div className="absolute inset-0 z-0 bg-black/65" />

      {/* Subtle gold vignette */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Section label */}
        <motion.span
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="block text-xs tracking-[6px] uppercase mb-5 text-amber-400"
          style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}
        >
          — Save The Date —
        </motion.span>

        {/* Main heading */}
        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="text-white text-center font-normal mb-4 leading-tight"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            textShadow: '0 2px 20px rgba(0,0,0,0.6)',
          }}
        >
          Wedding Details
        </motion.h2>

        {/* Cursive sub-heading */}
        <motion.p
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="text-amber-300 text-center mb-10"
          style={{
            fontFamily: '"Great Vibes", "Dancing Script", cursive',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          Kasuni &amp; Dasun
        </motion.p>

        {/* Gold divider */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="flex items-center gap-4 mb-14 w-full max-w-xs"
        >
          <div className="h-px flex-1 bg-amber-400/50" />
          <span className="text-amber-400 text-xl">💍</span>
          <div className="h-px flex-1 bg-amber-400/50" />
        </motion.div>

        {/* Detail cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {DETAILS.map((detail, i) => (
            <motion.div
              key={detail.label}
              custom={i + 4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              whileHover={{ scale: 1.05, boxShadow: '0 16px 40px rgba(212,175,55,0.25)' }}
              className="flex flex-col items-center text-center rounded-2xl p-8 transition-colors duration-300"
              style={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(212,175,55,0.25)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
              }}
            >
              <span className="text-4xl mb-4 block transform-gpu">{detail.icon}</span>
              <span
                className="text-amber-400 text-xs tracking-[4px] uppercase mb-2 font-bold"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {detail.label}
              </span>
              <p
                className="text-white text-lg md:text-xl font-semibold mb-1 leading-snug"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {detail.value}
              </p>
              <p
                className="text-white/55 text-sm"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {detail.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.p
          custom={9}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeUp}
          className="mt-16 text-white/70 text-center max-w-2xl leading-relaxed italic"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          }}
        >
          "Two souls, one journey — we joyfully invite you to witness the beginning of our forever."
        </motion.p>
      </div>
    </section>
  )
}
