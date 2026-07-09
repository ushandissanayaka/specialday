'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Dynamic imports for client components
const HeroSection = dynamic(() => import('@/components/Hero/HeroSection'), { ssr: false })
const AboutSection = dynamic(() => import('@/components/About/AboutSection'), { ssr: false })
const VisionMissionSection = dynamic(() => import('@/components/VisionMission/VisionMissionSection'), { ssr: false })
const GallerySection = dynamic(() => import('@/components/Gallery/GallerySection'), { ssr: false })
const SocialCountSection = dynamic(() => import('@/components/SocialCount/SocialCountSection'), { ssr: false })
const ContactSection = dynamic(() => import('@/components/Contact/ContactSection'), { ssr: false })
const LocationSection = dynamic(() => import('@/components/Location/LocationSection'), { ssr: false })

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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black cursor-pointer"
            onClick={() => setHasEntered(true)}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-100"
            >
              <source src="/videos/wedding-bg.mp4" type="video/mp4" />
            </video>
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
              {/* No text overlay as requested, just the video */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div style={{ opacity: hasEntered ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <LocationSection />
        <SocialCountSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
