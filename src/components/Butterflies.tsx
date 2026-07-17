'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const BUTTERFLY_COLORS = [
  '#FFB6C1', // Light Pink
  '#87CEFA', // Light Sky Blue
  '#98FB98', // Pale Green
  '#DDA0DD', // Plum
  '#F0E68C', // Khaki
  '#FFA07A', // Light Salmon
]

const Butterfly = ({ delay, duration, startX, startY, color, size }: any) => {
  return (
    <motion.div
      initial={{ x: startX, y: startY, opacity: 0, scale: 0.5 }}
      animate={{
        x: [
          startX,
          startX + (Math.random() * 300 - 150),
          startX + (Math.random() * 500 - 250),
          startX + (Math.random() * 700 - 350)
        ],
        y: [
          startY,
          startY - 200,
          startY - 600,
          -100
        ],
        opacity: [0, 1, 1, 0],
        scale: [size * 0.5, size, size * 0.8, size * 0.5],
        rotate: [0, 15, -15, 20, -10, 5],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
      className="fixed z-50 pointer-events-none"
    >
      <div style={{ animation: 'flap 0.15s ease-in-out infinite alternate', transformOrigin: 'center' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.4))' }}>
          <path d="M12 22C12 22 15 16 18 15C21 14 23 10 21 7C19 4 15 6 13 9C12.5 9.75 12 11 12 11C12 11 11.5 9.75 11 9C9 6 5 4 3 7C1 10 3 14 6 15C9 16 12 22 12 22Z" />
          <path d="M12 22C12 22 10 16 7 15C4 14 2 10 4 7C6 4 10 6 12 9C12.5 9.75 13 11 13 11" fill="rgba(255,255,255,0.4)" />
        </svg>
      </div>
    </motion.div>
  )
}

export default function Butterflies() {
  const [mounted, setMounted] = useState(false)
  const [butterflies, setButterflies] = useState<any[]>([])

  useEffect(() => {
    setMounted(true)
    const newButterflies = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 15, // Staggered start times
      duration: 15 + Math.random() * 10, // Different flying speeds
      startX: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 500,
      startY: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
      color: BUTTERFLY_COLORS[Math.floor(Math.random() * BUTTERFLY_COLORS.length)],
      size: 0.6 + Math.random() * 0.8 // Random size
    }))
    setButterflies(newButterflies)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {butterflies.map((b) => (
        <Butterfly key={b.id} {...b} />
      ))}
    </div>
  )
}
