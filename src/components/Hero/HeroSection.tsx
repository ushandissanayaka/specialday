'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const WEDDING_NAMES = 'Emma & Liam'
const PHRASES = [
  'WE ARE GETTING MARRIED',
  'JOIN US TO CELEBRATE',
  'A NIGHT TO REMEMBER',
  'OUR SPECIAL DAY'
]

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  // Typing effect
  useEffect(() => {
    const phrase = PHRASES[currentPhrase]
    const speed = isDeleting ? 40 : 80

    if (!isDeleting && charIndex < phrase.length) {
      const t = setTimeout(() => {
        setDisplayText(phrase.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, speed)
      return () => clearTimeout(t)
    }

    if (!isDeleting && charIndex === phrase.length) {
      const t = setTimeout(() => setIsDeleting(true), 2500)
      return () => clearTimeout(t)
    }

    if (isDeleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayText(phrase.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      }, speed)
      return () => clearTimeout(t)
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setCurrentPhrase(s => (s + 1) % PHRASES.length)
    }
  }, [charIndex, isDeleting, currentPhrase])

  return (
    <section id="home" className="relative w-full h-screen min-h-screen overflow-hidden bg-black text-gray-900">
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
        <source src="/videos/wedding-bg.mp4" type="video/mp4" />
      </video>
    </section>
  )
}
