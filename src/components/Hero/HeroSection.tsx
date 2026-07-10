'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' })

  return (
    <section id="home" ref={sectionRef} className="relative w-full h-screen min-h-screen overflow-hidden bg-black text-gray-900">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onPlaying={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ zIndex: 1 }}
      >
        <source src="/videos/webpageinitial.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 2 }}></div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" style={{ zIndex: 2 }}></div>

      {/* Animated Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4 pt-10" style={{ zIndex: 10 }}>
        <motion.h1
          initial={{ y: -200, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: -200, opacity: 0 }}
          transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-white text-6xl md:text-8xl lg:text-9xl mb-8 drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]"
          style={{ fontFamily: "'Playfair Display', 'Cinzel', 'Georgia', serif", fontWeight: 600, letterSpacing: '0.05em' }}
        >
          Kasuni & Dasun
        </motion.h1>
        
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
          transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-white text-xl md:text-3xl lg:text-4xl mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] max-w-4xl tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Montserrat', 'Lato', sans-serif", fontWeight: 300 }}
        >
          Joyfully Invite You To Celebrate our Wedding
        </motion.p>
        
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
          transition={{ duration: 1.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-white text-3xl md:text-5xl lg:text-6xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] max-w-5xl leading-relaxed"
          style={{ fontFamily: "'Great Vibes', 'Dancing Script', 'Brush Script MT', cursive", fontWeight: 400 }}
        >
          Two hearts, one soul, one beautiful journey begins forever.
        </motion.p>
      </div>
    </section>
  )
}
