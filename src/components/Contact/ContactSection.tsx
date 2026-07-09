'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-80px' })

  return (
    <section id="rsvp" ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-stone-100 text-stone-900">
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            className="text-xs tracking-[6px] uppercase mb-4 block text-stone-500" 
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            — We'd Love For You To Join Us —
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} 
            transition={{ delay: 0.1 }}
            className="font-normal" 
            style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            RSVP
          </motion.h2>
          <p className="mt-4 text-stone-500" style={{ fontFamily: 'Lato, sans-serif' }}>
            Please kindly respond by September 1st, 2026.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} 
          transition={{ delay: 0.3 }}
          className="bg-white p-10 md:p-14 shadow-sm border border-stone-200 text-center"
        >
          <form className="max-w-xl mx-auto space-y-6">
            
            <div>
              <label className="block text-sm uppercase tracking-[2px] text-stone-500 mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>
                Full Name(s)
              </label>
              <input 
                type="text" 
                placeholder="John & Jane Doe" 
                className="w-full border-b border-stone-300 py-3 text-center focus:outline-none focus:border-stone-500 text-lg transition-colors bg-transparent"
                style={{ fontFamily: '"Playfair Display", serif' }}
              />
            </div>

            <div className="pt-4">
              <label className="block text-sm uppercase tracking-[2px] text-stone-500 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
                Will You Attend?
              </label>
              <div className="flex justify-center gap-8">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="attend" className="w-4 h-4 accent-stone-700" />
                  <span className="text-lg" style={{ fontFamily: '"Playfair Display", serif' }}>Joyfully Accept</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="attend" className="w-4 h-4 accent-stone-700" />
                  <span className="text-lg" style={{ fontFamily: '"Playfair Display", serif' }}>Regretfully Decline</span>
                </label>
              </div>
            </div>

            <div className="pt-6">
              <label className="block text-sm uppercase tracking-[2px] text-stone-500 mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>
                Dietary Requirements / Song Requests
              </label>
              <textarea 
                rows={3} 
                className="w-full border-b border-stone-300 py-3 text-center focus:outline-none focus:border-stone-500 text-lg transition-colors bg-transparent resize-none"
                style={{ fontFamily: '"Playfair Display", serif' }}
              />
            </div>

            <div className="pt-8">
              <button 
                type="button" 
                className="px-12 py-4 bg-stone-900 text-white tracking-[3px] uppercase text-sm hover:bg-stone-700 transition-colors w-full md:w-auto"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Send RSVP
              </button>
            </div>
          </form>
        </motion.div>

        {/* Gift Registry Text */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={isInView ? { opacity: 1 } : { opacity: 0 }} 
          transition={{ delay: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>Gift Registry</h3>
          <p className="text-stone-500 max-w-lg mx-auto" style={{ fontFamily: 'Lato, sans-serif' }}>
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we are registered at the following stores.
          </p>
          <div className="mt-6 flex justify-center gap-6 text-sm tracking-[2px] uppercase" style={{ fontFamily: 'Lato, sans-serif' }}>
            <a href="#" className="underline hover:text-stone-500 transition-colors">The White Company</a>
            <a href="#" className="underline hover:text-stone-500 transition-colors">Bloomingdale's</a>
          </div>
        </motion.div>
        
      </div>
    </section>
  )
}
