'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SCHEDULE_LEFT = [
  { time: '8:30 AM', event: 'Guest Arrival', icon: '🕊️', desc: 'Welcome guests are greeted with flowers' },
  { time: '9:00 AM', event: 'Wedding Ceremony', icon: '💍', desc: 'The sacred vows are exchanged' },
]

const SCHEDULE_RIGHT = [
  { time: '10:30 AM', event: 'Wedding Photography', icon: '📸', desc: 'Capturing memories that last forever' },
  { time: '11:30 AM', event: 'Reception & Lunch', icon: '🥂', desc: 'Celebrate with food, music & joy' },
]

export default function ScheduleSection() {

  return (
    <section
      id="schedule"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ fontFamily: '"Playfair Display", serif' }}
    >
      {/* Background: desktop = fixed parallax | mobile = scroll with mobile image */}
      {/* Desktop layer */}
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage: "url('/images/BackgroundImages/gallarybackground.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Mobile layer — mobile01.png fits exactly on phone screens */}
      <div
        className="absolute inset-0 z-0 block md:hidden"
        style={{
          backgroundImage: "url('/images/BackgroundImages/mobile01.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
        }}
      />

      {/* Optional soft overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/70 z-0" />
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-purple-50 blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-purple-50 blur-3xl opacity-60" />
      </div>

      {/* Header */}
      <div className="text-center mb-16 px-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="block text-xs tracking-[6px] uppercase mb-3 text-stone-900 font-bold"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          — The Big Day —
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-semibold text-black drop-shadow-sm"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
        >
          📖 Event Schedule
        </motion.h2>
      </div>

      {/* Main Content: Left Schedule | Ring | Right Schedule */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">

        {/* LEFT SCHEDULE */}
        <div className="flex-1 flex flex-col gap-10 md:pr-12">
          {SCHEDULE_LEFT.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.2, type: 'spring', stiffness: 60 }}
              className="flex flex-col items-end text-right"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl">{item.icon}</span>
                <span
                  className="text-base md:text-lg tracking-[4px] uppercase text-amber-900 font-extrabold"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {item.time}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-medium text-black mb-1">{item.event}</h3>
              <p className="text-base text-stone-900 font-semibold italic" style={{ fontFamily: 'Lato, sans-serif' }}>{item.desc}</p>
              {/* Connector line */}
              <div className="mt-4 h-px w-32 bg-gradient-to-l from-amber-400 to-transparent self-end" />
            </motion.div>
          ))}
        </div>

        {/* CENTER — 3D Gold Medallion Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3, rotate: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, delay: 0.3, type: 'spring', stiffness: 50, damping: 14 }}
          className="relative flex-shrink-0 flex items-center justify-center"
          style={{ width: 'clamp(280px, 90vw, 400px)', height: 'clamp(280px, 90vw, 400px)' }}
        >
          {/* 3D outer glow halo */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow:
                '0 0 80px 30px rgba(218,165,32,0.35), 0 0 150px 50px rgba(255,215,0,0.12)',
            }}
          />

          {/* 3D medallion border — single ring with depth */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'radial-gradient(ellipse at 30% 25%, #fff7a1 0%, #ffd700 20%, #c8960c 50%, #7a5800 75%, #3d2b00 100%)',
              boxShadow:
                /* top-left rim highlight */
                'inset 6px 6px 18px rgba(255,255,180,0.8),' +
                /* bottom-right depth shadow */
                'inset -8px -8px 24px rgba(0,0,0,0.55),' +
                /* outer drop shadow for lift */
                '0 24px 70px rgba(0,0,0,0.45), 0 6px 20px rgba(184,134,11,0.6)',
              padding: 24, // thicker ring
            }}
          >
            {/* Inner inset shadow ring for depth */}
            <div
              className="w-full h-full rounded-full flex items-center justify-center"
              style={{
                background:
                  'radial-gradient(ellipse at 35% 30%, #ffe88a 0%, #daa520 30%, #8b6000 70%, #3d2b00 100%)',
                boxShadow:
                  'inset 4px 4px 14px rgba(255,255,200,0.6), inset -6px -6px 20px rgba(0,0,0,0.5)',
                padding: 16,
              }}
            >
              {/* Photo inside */}
              <div
                className="w-full h-full rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/gallery/img5.jpg)',
                  boxShadow: 'inset 0 0 40px rgba(0,0,0,0.4)',
                }}
              />
            </div>
          </div>

          {/* Sparkling diamond at top */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl"
          >
            💎
          </motion.div>

          {/* Glitter dots around ring */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, d) => (
            <motion.div
              key={d}
              className="absolute w-3 h-3 rounded-full"
              style={{
                top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 195}px - 6px)`,
                left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 195}px - 6px)`,
                background: 'radial-gradient(circle, #fffde0, #ffd700, #b8860b)',
                boxShadow: '0 0 10px 4px rgba(255,215,0,0.7)',
              }}
              animate={{ scale: [1, 1.9, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.2, delay: d * 0.28, repeat: Infinity }}
            />
          ))}
        </motion.div>

        {/* RIGHT SCHEDULE */}
        <div className="flex-1 flex flex-col gap-10 md:pl-12">
          {SCHEDULE_RIGHT.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.2, type: 'spring', stiffness: 60 }}
              className="flex flex-col items-start text-left"
            >
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="text-base md:text-lg tracking-[4px] uppercase text-amber-900 font-extrabold"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {item.time}
                </span>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-medium text-black mb-1">{item.event}</h3>
              <p className="text-base text-stone-900 font-semibold italic" style={{ fontFamily: 'Lato, sans-serif' }}>{item.desc}</p>
              {/* Connector line */}
              <div className="mt-4 h-px w-32 bg-gradient-to-r from-amber-400 to-transparent self-start" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
