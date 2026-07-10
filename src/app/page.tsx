'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Dynamic imports for client components
const HeroSection = dynamic(() => import('@/components/Hero/HeroSection'), { ssr: false })
const AboutSection = dynamic(() => import('@/components/About/AboutSection'), { ssr: false })

const GallerySection = dynamic(() => import('@/components/Gallery/GallerySection'), { ssr: false })
const ScheduleSection = dynamic(() => import('@/components/Schedule/ScheduleSection'), { ssr: false })
const ContactSection = dynamic(() => import('@/components/Contact/ContactSection'), { ssr: false })
const LocationSection = dynamic(() => import('@/components/Location/LocationSection'), { ssr: false })
const CountdownSection = dynamic(() => import('@/components/Countdown/CountdownSection'), { ssr: false })

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false)

  return (
    <main className="relative bg-stone-50 text-stone-900 overflow-x-hidden">
      
      {/* Splash Screen Overlay */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black cursor-pointer overflow-hidden"
            onClick={() => setHasEntered(true)}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-100"
            >
              <source src="/videos/startingVideo.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full px-4 pt-10">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(234, 179, 8, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-12 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-white font-semibold text-lg md:text-xl px-12 py-3 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-yellow-400/50 uppercase tracking-widest transition-all duration-300"
              >
                Click
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div style={{ opacity: hasEntered ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ScheduleSection />

        <LocationSection />
        <CountdownSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
