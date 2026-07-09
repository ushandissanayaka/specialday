'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const NAV_LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'OUR STORY' },
  { href: '#details', label: 'DETAILS' },
  { href: '#gallery', label: 'GALLERY' },
  { href: '#countdown', label: 'COUNTDOWN' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', color: scrolled ? '#1c1917' : 'white' }}>
              E & L
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-bold tracking-widest transition-all duration-300 hover:scale-105"
                style={{ 
                  fontFamily: 'Lato, sans-serif',
                  color: scrolled ? '#57534e' : 'rgba(255,255,255,0.8)'
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#rsvp"
              className="px-6 py-2 text-xs font-bold tracking-widest transition-all duration-300 hover:scale-105 border"
              style={{
                fontFamily: 'Lato, sans-serif',
                background: scrolled ? '#1c1917' : 'white',
                color: scrolled ? 'white' : 'black',
                borderColor: scrolled ? '#1c1917' : 'white',
              }}
            >
              RSVP
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            style={{ color: scrolled ? '#1c1917' : 'white' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-24 px-8 gap-6 bg-white"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="text-xl tracking-[4px] uppercase border-b border-stone-100 py-4 text-stone-600 transition-colors duration-300 hover:text-stone-900"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#rsvp"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => setMenuOpen(false)}
              className="mt-6 px-6 py-4 text-center text-sm font-bold tracking-widest uppercase bg-stone-900 text-white"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              RSVP
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
