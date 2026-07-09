'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

export default function LocationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })

  const variants = {
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

  return (
    <section
      id="location"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-white text-[#5c5248]"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 z-10 flex flex-col items-center">
        {/* Header */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
          className="text-center mb-16 relative"
        >
          <h2
            className="text-5xl md:text-7xl mb-4"
            style={{ fontFamily: '"Pinyon Script", cursive' }}
          >
            Wedding Location
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 opacity-70">
            <div className="w-12 h-px bg-[#c2b4a3]" />
            <FaHeart className="w-3 h-3 text-[#c2b4a3]" />
            <div className="w-12 h-px bg-[#c2b4a3]" />
          </div>
        </motion.div>

        {/* Address and details */}
        <motion.div
          custom={1}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaMapMarkerAlt className="text-[#c2b4a3] w-5 h-5 md:w-6 md:h-6" />
            <h3
              className="text-2xl md:text-3xl font-normal uppercase tracking-widest"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              The Willow Gardens
            </h3>
          </div>
          <p
            className="text-lg md:text-xl tracking-wider text-[#8c8273]"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Via dei Giardini 15, 50122 Florence, Italy
          </p>
        </motion.div>

        {/* Google Map */}
        <motion.div
          custom={2}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants}
          className="w-full max-w-4xl h-[400px] md:h-[500px] shadow-2xl relative bg-stone-100 p-2 border border-[#e3dcd1]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11537.49129598858!2d11.24626002162388!3d43.7695604169542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56a680d2d6ad%3A0x93d57917efc72a03!2sFlorence%2C%20Metropolitan%20City%20of%20Florence%2C%20Italy!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
