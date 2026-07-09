'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

export default function SocialCountSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-80px' })

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Target date: October 10, 2026 as requested
    const targetDate = new Date('2026-10-10T00:00:00').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Format with leading zeros for hours, minutes, seconds
  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <section
      id="countdown"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-[#faf8f5] text-[#2c2825]"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative max-w-5xl mx-auto px-6 md:px-12 z-10 flex flex-col items-center"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16 relative">
          <h2
            className="font-normal uppercase tracking-widest text-3xl md:text-5xl"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            TIME LEFT UNTIL
          </h2>
          <div className="flex items-center justify-center -mt-6 md:-mt-8">
            <span
              className="text-5xl md:text-7xl mr-4 md:mr-6"
              style={{ fontFamily: '"Pinyon Script", cursive' }}
            >
              the
            </span>
            <span
              className="font-normal uppercase tracking-widest text-3xl md:text-5xl mt-6 md:mt-8"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              WEDDING
            </span>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-24 w-full">
          {/* Numbers */}
          <div
            className="flex items-center justify-center text-5xl md:text-8xl lg:text-9xl mb-6 font-normal tracking-wide"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            <span className="w-20 md:w-32 lg:w-48 text-right">{timeLeft.days}</span>
            <span className="mx-2 md:mx-4 -mt-2">:</span>
            <span className="w-16 md:w-32 lg:w-40 text-center">{formatNumber(timeLeft.hours)}</span>
            <span className="mx-2 md:mx-4 -mt-2">:</span>
            <span className="w-16 md:w-32 lg:w-40 text-center">{formatNumber(timeLeft.minutes)}</span>
            <span className="mx-2 md:mx-4 -mt-2">:</span>
            <span className="w-16 md:w-32 lg:w-40 text-left text-[#b5afab]">{formatNumber(timeLeft.seconds)}</span>
          </div>

          {/* Labels */}
          <div
            className="flex items-center justify-center w-full uppercase tracking-[2px] md:tracking-[4px] text-xs md:text-base text-[#5c5248]"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            <span className="w-20 md:w-32 lg:w-48 text-right pr-2">DAYS</span>
            <span className="mx-2 md:mx-4 opacity-0">:</span>
            <span className="w-16 md:w-32 lg:w-40 text-center">HOURS</span>
            <span className="mx-2 md:mx-4 opacity-0">:</span>
            <span className="w-16 md:w-32 lg:w-40 text-center">MINUTES</span>
            <span className="mx-2 md:mx-4 opacity-0">:</span>
            <span className="w-16 md:w-32 lg:w-40 text-left pl-2">SECONDS</span>
          </div>
        </motion.div>

        {/* Dress Code Section */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center max-w-2xl">
          <h3
            className="text-6xl md:text-8xl mb-8"
            style={{ fontFamily: '"Pinyon Script", cursive' }}
          >
            Dress Code
          </h3>
          <p
            className="text-lg md:text-xl leading-relaxed mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            We would like to ask for semi-formal attire in<br className="hidden md:block" />
            soft, romantic tones.<br className="hidden md:block" />
            Comfortable shoes are welcome for dancing<br className="hidden md:block" />
            under the stars!
          </p>

          <div className="flex items-center justify-center gap-2 mt-4 opacity-50">
            <svg width="60" height="20" viewBox="0 0 100 20" className="stroke-[#5c5248]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 Q 30 10 40 10 Q 45 0 50 10 Q 55 20 60 10 Q 70 10 100 10" strokeWidth="1" />
              <path d="M48 9 Q 50 5 52 9 Q 50 12 48 9" strokeWidth="1" fill="#5c5248" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
