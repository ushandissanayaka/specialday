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
const WeddingDetailsSection = dynamic(() => import('@/components/WeddingDetails/WeddingDetailsSection'), { ssr: false })

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false)
  const [showIntroImage, setShowIntroImage] = useState(false)
  const [showIntroText, setShowIntroText] = useState(false)

  useEffect(() => {
    const imageTimer = window.setTimeout(() => setShowIntroImage(true), 4000)
    const textTimer = window.setTimeout(() => setShowIntroText(true), 5000)

    return () => {
      window.clearTimeout(imageTimer)
      window.clearTimeout(textTimer)
    }
  }, [])

  return (
    <main className="relative text-stone-900 overflow-x-hidden bg-transparent">

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
              <div className="w-full flex flex-col items-center justify-start pt-8 md:pt-12 px-4">
                {showIntroText && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Cursive Names */}
                    <p
                      className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-widest drop-shadow-lg"
                      style={{ fontFamily: '"Great Vibes", "Dancing Script", "Brush Script MT", cursive', fontWeight: 400, letterSpacing: '0.15em' }}
                    >
                      Kasuni & Dasun
                    </p>

                    {/* Gold Ampersand Icon Below */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mt-2 mb-6"
                    >
                      <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text
                          x="50"
                          y="75"
                          fontSize="80"
                          fontFamily="'Great Vibes', cursive"
                          fill="#D4AF37"
                          textAnchor="middle"
                          fontWeight="400"
                        >
                          &
                        </text>
                      </svg>
                    </motion.div>

                    {/* Loading Animation with Curved Button */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="mb-8"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <div className="flex gap-1">
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-yellow-400"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1, delay: 0.2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-yellow-400"
                          />
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1, delay: 0.4, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-yellow-400"
                          />
                        </div>
                        <span className="text-white text-xs md:text-sm ml-2 font-light">Loading...</span>
                      </div>
                    </motion.div>

                    {/* Transparent Open Invitation Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setHasEntered(true)}
                      className="relative mt-6 px-10 py-3 text-white text-lg md:text-xl font-semibold uppercase tracking-[0.15em] border-2 border-yellow-400 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                      style={{
                        fontFamily: '"Montserrat", sans-serif',
                        boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
                      }}
                    >
                      Open Invitation
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div style={{ opacity: hasEntered ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
        <HeroSection isVisible={hasEntered} />

        {/* Global Fixed Background for all sections below Hero */}
        <div className="fixed inset-0 z-[-10] w-full h-full pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/BackgroundImages/back04.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>

        <div className="relative z-0">
          <WeddingDetailsSection />
          <AboutSection />
          <GallerySection />
          <ScheduleSection />
          <LocationSection />
          <CountdownSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </main>
  )
}
