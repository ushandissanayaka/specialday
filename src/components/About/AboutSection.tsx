'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  }

  // Animation for individual letters of ISLA and JACKSON
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full min-h-screen bg-white flex flex-col md:flex-row overflow-hidden"
    >
      {/* Floral left accent (Placeholder using a soft gradient to simulate the floral edge if no image is available) */}
      <div 
        className="absolute top-0 left-0 bottom-0 w-32 md:w-64 pointer-events-none z-20"
        style={{
          background: 'radial-gradient(ellipse at left center, rgba(64,55,48,0.03) 0%, transparent 70%)',
        }}
      />

      {/* Left side: Text Content */}
      <div className="w-full md:w-[55%] flex flex-col justify-center items-center py-20 px-6 md:px-12 relative z-10 text-[#403730]">
        
        <motion.h3
          custom={0}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={textVariants}
          className="text-xl md:text-3xl font-bold tracking-widest uppercase mb-4 text-center leading-relaxed"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          CELEBRATE LOVE<br />WITH US...
        </motion.h3>

        <motion.div
          custom={1}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={textVariants}
          className="text-3xl md:text-5xl text-center mb-10 -rotate-2"
          style={{ fontFamily: '"Pinyon Script", cursive' }}
        >
          <span className="block mb-2">As we begin our journey</span>
          <span className="flex items-center justify-center gap-4">
            together
            <svg width="60" height="20" viewBox="0 0 100 20" className="opacity-60 stroke-[#403730]" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 Q 30 10 40 10 Q 45 0 50 10 Q 55 20 60 10 Q 70 10 100 10" strokeWidth="1" />
              <path d="M48 9 Q 50 5 52 9 Q 50 12 48 9" strokeWidth="1" fill="#403730" />
            </svg>
          </span>
        </motion.div>

        {/* Names */}
        <div className="text-center mb-10 relative">
          <motion.div
            className="flex justify-center"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
          >
            {"EMMA".split('').map((char, index) => (
              <motion.span
                key={`emma-${index}`}
                variants={letterVariants}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-6xl md:text-8xl lg:text-[7rem] font-normal uppercase tracking-wider"
                style={{ fontFamily: '"Playfair Display", serif', lineHeight: 1 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={textVariants}
            className="text-4xl md:text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ fontFamily: '"Pinyon Script", cursive', marginTop: '0.2em' }}
          >
            and
          </motion.div>

          <motion.div
            className="flex justify-center mt-2"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ staggerChildren: 0.1, delayChildren: 1.0 }}
          >
            {"LIAM".split('').map((char, index) => (
              <motion.span
                key={`liam-${index}`}
                variants={letterVariants}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-6xl md:text-8xl lg:text-[7rem] font-normal uppercase tracking-wider"
                style={{ fontFamily: '"Playfair Display", serif', lineHeight: 1 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          custom={6}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={textVariants}
          className="flex items-center justify-center gap-4 mb-8 w-full max-w-sm"
        >
          <div className="h-px bg-[#403730] w-full opacity-60" />
          <span className="text-lg">♥</span>
          <div className="h-px bg-[#403730] w-full opacity-60" />
        </motion.div>

        {/* Date */}
        <motion.div
          custom={7}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={textVariants}
          className="text-7xl md:text-[7rem] text-center mb-8"
          style={{ fontFamily: '"Pinyon Script", cursive', lineHeight: 0.8 }}
        >
          Oct 15
        </motion.div>

        {/* Location Details */}
        <motion.div
          custom={8}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={textVariants}
          className="text-center text-lg md:text-xl space-y-2 opacity-90"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          <p>Four o'clock in the afternoon</p>
          <p>The Willow Gardens • Florence, Italy</p>
        </motion.div>
      </div>

      {/* Right side: Image */}
      <div className="w-full md:w-[45%] h-[50vh] md:h-screen relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full relative"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1000&q=80" 
            alt="Isla and Jackson" 
            className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
          />

          {/* Fade overlays for blending */}
          {/* Desktop horizontal fade */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent" />
          {/* Mobile vertical fade */}
          <div className="md:hidden absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
