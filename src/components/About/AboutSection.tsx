'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutSection() {
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
      className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden bg-purple-50"
    >
      {/* Left side: Text Content with back01.png */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center py-20 px-6 md:px-12 relative z-10 text-white min-h-[50vh]">
        {/* Left background image */}
        <div 
          className="absolute inset-0 w-full h-full object-cover z-[-2]"
          style={{ backgroundImage: 'url(/images/BackgroundImages/back01.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-[-1]" />
        
        <motion.h3
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
          variants={textVariants}
          className="text-xl md:text-3xl font-bold tracking-widest uppercase mb-4 text-center leading-relaxed"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          CELEBRATE LOVE<br />WITH US...
        </motion.h3>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
          variants={textVariants}
          className="text-3xl md:text-5xl text-center mb-10 -rotate-2"
          style={{ fontFamily: '"Great Vibes", "Pinyon Script", cursive' }}
        >
          <span className="block mb-2">As we begin our journey</span>
          <span className="flex items-center justify-center gap-4">
            together
            <svg width="60" height="20" viewBox="0 0 100 20" className="opacity-60 stroke-white" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10 Q 30 10 40 10 Q 45 0 50 10 Q 55 20 60 10 Q 70 10 100 10" strokeWidth="1" />
              <path d="M48 9 Q 50 5 52 9 Q 50 12 48 9" strokeWidth="1" fill="white" />
            </svg>
          </span>
        </motion.div>

        {/* Names */}
        <div className="text-center mb-10 relative">
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
          >
            {"DASUN".split('').map((char, index) => (
              <motion.span
                key={`dasun-${index}`}
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
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
            variants={textVariants}
            className="text-4xl md:text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ fontFamily: '"Great Vibes", "Pinyon Script", cursive', marginTop: '0.2em' }}
          >
            and
          </motion.div>

          <motion.div
            className="flex justify-center mt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
            transition={{ staggerChildren: 0.1, delayChildren: 1.0 }}
          >
            {"KASUNI".split('').map((char, index) => (
              <motion.span
                key={`kasuni-${index}`}
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
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
          variants={textVariants}
          className="flex items-center justify-center gap-4 mb-8 w-full max-w-sm"
        >
          <div className="h-px bg-white w-full opacity-60" />
          <span className="text-lg">♥</span>
          <div className="h-px bg-white w-full opacity-60" />
        </motion.div>

        {/* Date */}
        <motion.div
          custom={7}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
          variants={textVariants}
          className="text-6xl md:text-[6rem] text-center mb-8"
          style={{ fontFamily: '"Great Vibes", "Pinyon Script", cursive', lineHeight: 0.8 }}
        >
          November 10
        </motion.div>

        {/* Invite Text */}
        <motion.div
          custom={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-50px' }}
          variants={textVariants}
          className="mt-6 text-center max-w-xl px-4"
        >
          <p className="text-xl md:text-2xl leading-relaxed text-white/90 italic" style={{ fontFamily: '"Playfair Display", serif' }}>
            "We are delighted to invite you to celebrate the beginning of our forever. Your presence, love, and blessings will make our special day even more memorable."
          </p>
        </motion.div>
      </div>

      {/* Right side: Image only */}
      <div className="w-full md:w-1/2 min-h-[50vh] relative">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full h-full absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/BackgroundImages/back03.png" 
            alt="Wedding Background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
