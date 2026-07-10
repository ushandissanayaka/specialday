'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// Wedding date: November 10, 2026
const WEDDING_DATE = new Date('2026-11-10T09:00:00')

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculate = () => {
      const now = new Date()
      const diff = WEDDING_DATE.getTime() - now.getTime()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    calculate()
    const timer = setInterval(calculate, 1000)
    return () => clearInterval(timer)
  }, [])

  return timeLeft
}

const FRAMES = [
  { image: '/images/gallery/img3.jpg', label: 'Days',    key: 'days' },
  { image: '/images/gallery/img6.jpg', label: 'Hours',   key: 'hours' },
  { image: '/images/gallery/img9.jpg', label: 'Minutes', key: 'minutes' },
  { image: '/images/gallery/img8.jpg', label: 'Seconds', key: 'seconds' },
]

export default function CountdownSection() {
  const timeLeft = useCountdown()

  return (
    <section
      id="countdown"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Fixed Background — stays in place as you scroll through countdown AND rsvp */}
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
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          {/* TIME LEFT UNTIL — small bold caps */}
          <p
            className="text-white/70 tracking-[8px] uppercase mb-2"
            style={{ fontFamily: 'Lato, sans-serif', fontSize: 'clamp(0.65rem, 2vw, 0.9rem)', fontWeight: 700 }}
          >
            Time Left Until
          </p>

          {/* the — large cursive italic */}
          <p
            className="text-amber-300 leading-none"
            style={{
              fontFamily: '"Great Vibes", "Pinyon Script", cursive',
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            }}
          >
            the
          </p>

          {/* WEDDING — large bold serif */}
          <h2
            className="text-white font-bold leading-none tracking-widest uppercase"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              letterSpacing: '0.18em',
              textShadow: '0 0 40px rgba(255,215,0,0.2)',
            }}
          >
            Wedding
          </h2>

          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="w-16 h-px bg-amber-400/50" />
            <span className="text-amber-400 text-xl">💍</span>
            <div className="w-16 h-px bg-amber-400/50" />
          </div>
        </motion.div>

        {/* Three Photo Frames with Countdown */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center w-full max-w-5xl">
          {FRAMES.map((frame, i) => {
            const value = timeLeft[frame.key as keyof typeof timeLeft]
            const displayValue = String(value).padStart(2, '0')

            return (
              <motion.div
                key={frame.key}
                initial={{ opacity: 0, y: 120, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: '-80px' }}
                transition={{
                  duration: 0.9,
                  delay: 0.2 + i * 0.2,
                  type: 'spring',
                  stiffness: 55,
                  damping: 14,
                }}
                className="relative group"
              >
                {/* Photo Frame */}
                <div
                  className="relative overflow-hidden shadow-2xl"
                  style={{
                    width: 280,
                    height: 360,
                    // Golden frame border
                    padding: '10px',
                    background: 'linear-gradient(135deg, #b8860b, #ffd700, #ffe066, #daa520, #b8860b)',
                    borderRadius: '6px',
                    boxShadow: '0 0 30px rgba(184,134,11,0.5), 0 20px 60px rgba(0,0,0,0.6)',
                  }}
                >
                  {/* Inner frame border accent */}
                  <div
                    className="relative w-full h-full overflow-hidden"
                    style={{
                      borderRadius: '3px',
                      outline: '2px solid rgba(255,215,0,0.4)',
                      outlineOffset: '-4px',
                    }}
                  >
                    {/* Photo Background */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${frame.image})` }}
                    />

                    {/* Dark gradient over image for text */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)',
                      }}
                    />

                    {/* Countdown number + label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                      <motion.span
                        key={displayValue}
                        initial={{ scale: 1.3, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-white font-bold leading-none drop-shadow-2xl"
                        style={{
                          fontFamily: '"Playfair Display", serif',
                          fontSize: '5.5rem',
                          textShadow: '0 0 20px rgba(255,215,0,0.5)',
                        }}
                      >
                        {displayValue}
                      </motion.span>
                      <span
                        className="text-amber-300 uppercase tracking-[4px] text-sm mt-1"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                      >
                        {frame.label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Shadow below frame */}
                <div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full blur-md opacity-50"
                  style={{ width: 220, height: 20, background: 'rgba(184,134,11,0.4)' }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Wedding date label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-white/70 text-center text-base tracking-widest uppercase"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          November 10, 2026 &nbsp;·&nbsp; Bolgoda Paradise Hotel
        </motion.p>
      </div>
    </section>
  )
}
