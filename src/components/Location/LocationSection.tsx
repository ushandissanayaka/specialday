'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function LocationSection() {
  return (
    <section
      id="location"
      className="relative bg-transparent"
      style={{ fontFamily: '"Playfair Display", serif' }}
    >
      {/* Dark overlay for global background visibility */}
      <div className="absolute inset-0 bg-black/65 z-0 pointer-events-none" />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center py-10 px-6"
      >
        <span
          className="block text-xs tracking-[6px] uppercase text-amber-500 mb-3"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          — Find Us Here —
        </span>
        <h2
          className="font-normal text-white drop-shadow-md"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
        >
          Wedding Location
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-16 h-px bg-amber-400/60" />
          <span className="text-amber-400 text-lg">♥</span>
          <div className="w-16 h-px bg-amber-400/60" />
        </div>
      </motion.div>

      {/* MOBILE: Map on top, full width */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="block md:hidden w-full relative z-20 pointer-events-auto"
        style={{ height: '280px' }}
      >
        <iframe
          src="https://maps.google.com/maps?q=Bolgoda%20Paradise%20Hotel%20Sri%20Lanka&z=16&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block', touchAction: 'auto', backgroundColor: 'transparent' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

      {/* Video section — full width */}
      <div className="relative w-full" style={{ minHeight: '90vh' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-cover"
          style={{ minHeight: '90vh', display: 'block' }}
        >
          <source src="/videos/locationVideo.mp4" type="video/mp4" />
        </video>

        {/* Hotel details — bottom left over video */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          className="absolute bottom-10 left-8 md:left-14 z-10 max-w-md"
        >
          <div className="flex items-center gap-2 mb-3">
            <FaMapMarkerAlt className="text-amber-400 w-5 h-5" />
            <span
              className="text-xs tracking-[4px] uppercase text-amber-300 font-semibold"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Venue
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl text-white font-normal mb-3 leading-tight drop-shadow-xl">
            Bolgoda Paradise Hotel
          </h3>
          <p
            className="text-base md:text-lg text-white/90 leading-relaxed mb-4 drop-shadow-md"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Join us at the beautiful Bolgoda Paradise Hotel for a memorable celebration
            filled with love, laughter, and unforgettable moments.
          </p>
          <div className="flex items-center gap-2 text-amber-300">
            <FaMapMarkerAlt className="w-4 h-4" />
            <span className="text-sm tracking-wide" style={{ fontFamily: 'Lato, sans-serif' }}>
              Bolgoda Paradise Hotel
            </span>
          </div>
        </motion.div>

        {/* DESKTOP: Map overlaid top-center on the video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.6, type: 'spring', stiffness: 60 }}
          className="hidden md:block absolute z-20 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/50 top-6 left-1/2 -translate-x-1/2 pointer-events-auto"
          style={{ width: 500, height: 320 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Bolgoda%20Paradise%20Hotel%20Sri%20Lanka&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, touchAction: 'auto', backgroundColor: 'transparent' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
