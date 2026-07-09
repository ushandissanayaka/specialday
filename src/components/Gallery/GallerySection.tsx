'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Gallery images data
const GALLERY_IMAGES = [
  { src: '/images/gallery/couple1.jpg', label: 'Engagement', tag: 'MEMORIES' },
  { src: '/images/gallery/couple2.jpg', label: 'Paris Trip', tag: 'MEMORIES' },
  { src: '/images/gallery/couple3.jpg', label: 'The Proposal', tag: 'MEMORIES' },
  { src: '/images/gallery/couple4.jpg', label: 'Beach Walk', tag: 'MEMORIES' },
  { src: '/images/gallery/couple5.jpg', label: 'Anniversary', tag: 'MEMORIES' },
  { src: '/images/gallery/couple6.jpg', label: 'Hiking', tag: 'MEMORIES' },
  { src: '/images/gallery/couple7.jpg', label: 'Coffee Date', tag: 'MEMORIES' },
  { src: '/images/gallery/couple8.jpg', label: 'Winter Skiing', tag: 'MEMORIES' },
  { src: '/images/gallery/couple9.jpg', label: 'Road Trip', tag: 'MEMORIES' },
]

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-80px' })

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden bg-white"
    >
      <div className="relative" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[6px] uppercase mb-4 block text-stone-500"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            — Captured Moments —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-normal"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#1c1917',
            }}
          >
            Photo Gallery
          </motion.h2>
        </div>

        {/* Masonry-style gallery */}
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-3 md:gap-4 auto-rows-[220px] md:auto-rows-[280px]">
            {GALLERY_IMAGES.map((img, i) => {
              const isLeft = i % 2 === 0
              const isLarge = i === 0 || i === 5 // Span 2 rows
              const isWide = i === 2 // Span 2 cols

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, delay: 0.05 + i * 0.1, ease: 'easeOut' }}
                  whileHover={{ scale: 1.02, zIndex: 10 }}
                  className="relative overflow-hidden group cursor-pointer bg-stone-100 border border-stone-200 shadow-sm"
                  style={{
                    gridRow: isLarge ? 'span 2' : 'span 1',
                    gridColumn: isWide ? 'span 2' : 'span 1',
                  }}
                >
                  {/* Actual image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${img.src})`,
                    }}
                  />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6"
                    style={{
                      background: 'linear-gradient(to top, rgba(28,25,23,0.8), transparent)',
                    }}
                  >
                    <span
                      className="text-xs tracking-widest uppercase mb-1 text-stone-300"
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      {img.tag}
                    </span>
                    <span
                      className="text-white text-lg"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      {img.label}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
