'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function LocationSection() {
  return (
    <section
      id="location"
      className="relative bg-white"
      style={{ fontFamily: '"Playfair Display", serif' }}
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center py-10 px-6 bg-white"
      >
        <span
          className="block text-xs tracking-[6px] uppercase text-amber-500 mb-3"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          — Find Us Here —
        </span>
        <h2
          className="font-normal text-stone-800"
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
        className="block md:hidden w-full"
        style={{ height: '280px' }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2!2d79.910614!3d6.7824621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2457ad82eca25%3A0x904aaafa62ba3bc8!2sParadise%20Inn%20Bolgoda!5e0!3m2!1sen!2slk!4v1700000000001!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
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
          className="hidden md:block absolute z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/50 top-6 left-1/2 -translate-x-1/2"
          style={{ width: 500, height: 320 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2!2d79.910614!3d6.7824621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2457ad82eca25%3A0x904aaafa62ba3bc8!2sParadise%20Inn%20Bolgoda!5e0!3m2!1sen!2slk!4v1700000000001!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
