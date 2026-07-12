'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// We have 10 images in the folder, plus we add img3.jpg again to fill the final empty space perfectly
const GALLERY_IMAGES = [
  ...Array.from({ length: 10 }, (_, i) => ({
    src: `/images/gallery/img${i + 1}.jpg`,
    label: `Memory ${i + 1}`,
    tag: 'MEMORIES'
  })),
  {
    src: '/images/gallery/img3.jpg',
    label: 'Memory 11',
    tag: 'MEMORIES'
  }
]

export default function GallerySection() {
  // Function to determine initial starting position (fly from all directions)
  const getInitialPosition = (index: number) => {
    // 0: from top, 1: from right, 2: from bottom, 3: from left
    const direction = index % 4
    switch (direction) {
      case 0: return { y: -100, x: 0, opacity: 0, scale: 0.5 } // Top
      case 1: return { x: 100, y: 0, opacity: 0, scale: 0.5 }  // Right
      case 2: return { y: 100, x: 0, opacity: 0, scale: 0.5 }  // Bottom
      case 3: return { x: -100, y: 0, opacity: 0, scale: 0.5 } // Left
      default: return { opacity: 0 }
    }
  }

  return (
    <section
      id="gallery"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background removed, global background will show through */}

      {/* Dark overlay to ensure text readability against global background */}
      <div className="absolute inset-0 bg-black/65 z-0" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[6px] uppercase mb-4 block text-amber-400 font-bold"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            — Captured Moments —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-semibold text-white drop-shadow-md"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#ffffff',
            }}
          >
            Photo Gallery
          </motion.h2>
        </div>

        {/* Masonry-style gallery */}
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-3 md:gap-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[280px]">
            {GALLERY_IMAGES.map((img, i) => {
              const isLarge = i === 0 || i === 5 // Span 2 rows
              const isWide = i === 2 || i === 7 || i === 10 // Span 2 cols

              return (
                <motion.div
                  key={i}
                  initial={getInitialPosition(i)}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{
                    type: 'spring',
                    damping: 18,
                    stiffness: 70,
                    delay: 0.1 + (i * 0.1) // Staggered entry
                  }}
                  whileHover={{ scale: 1.03, zIndex: 10, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}
                  className={`relative overflow-hidden group cursor-pointer bg-stone-100 border border-stone-200 shadow-sm rounded-md ${isLarge ? 'row-span-2' : ''} ${isWide ? 'col-span-2' : ''}`}
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
