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

const UNITS = [
  { label: 'Days', key: 'days', rotate: -30 },
  { label: 'Hours', key: 'hours', rotate: 30 },
  { label: 'Minutes', key: 'minutes', rotate: -30 },
  { label: 'Seconds', key: 'seconds', rotate: 30 },
]

export default function CountdownSection() {
  const timeLeft = useCountdown()

  return (
    <section
      id="countdown"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Background: desktop = fixed parallax | mobile = scroll with mobile image */}
      {/* Desktop layer */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: "url('/images/BackgroundImages/back02.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
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

        {/* Countdown Units with Butterfly Images */}
        <div className="flex flex-wrap gap-10 md:gap-16 items-center justify-center w-full max-w-5xl">
          {UNITS.map((unit, i) => {
            const value = timeLeft[unit.key as keyof typeof timeLeft]
            const displayValue = String(value).padStart(2, '0')

            return (
              <motion.div
                key={unit.key}
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.18,
                  type: 'spring',
                  stiffness: 55,
                  damping: 14,
                }}
                className="relative flex flex-col items-center justify-center"
                style={{ width: 260 }}
              >
                {/* Butterfly image rotated */}
                <div
                  style={{
                    transform: `rotate(${unit.rotate}deg)`,
                    width: 260,
                    height: 260,
                    position: 'relative',
                    filter: 'drop-shadow(0 0 24px rgba(255,200,50,0.6))',
                  }}
                >
                  <img
                    src="/images/BackgroundImages/countdown.png"
                    alt={unit.label}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Number overlay — centered on the butterfly */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pointerEvents: 'none',
                  }}
                >
                  <motion.span
                    key={displayValue}
                    initial={{ scale: 1.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: 'clamp(3.8rem, 7vw, 5.5rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1,
                      textShadow: '0 2px 16px rgba(0,0,0,0.9), 0 0 24px rgba(255,200,50,0.6)',
                    }}
                  >
                    {displayValue}
                  </motion.span>

                  <span
                    style={{
                      fontFamily: 'Lato, sans-serif',
                      fontSize: 'clamp(0.85rem, 2.2vw, 1.1rem)',
                      fontWeight: 700,
                      letterSpacing: '4px',
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      marginTop: 4,
                      textShadow: '0 1px 8px rgba(0,0,0,0.8)',
                    }}
                  >
                    {unit.label}
                  </span>
                </div>
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
