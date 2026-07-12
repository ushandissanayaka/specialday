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
      {/* Background removed, global background will show through */}

      {/* Dark overlay to ensure text readability against global background */}
      <div className="absolute inset-0 bg-black/65 z-0" />
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-purple-50 blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-purple-50 blur-3xl opacity-60" />
      </div>

      {/* Single Large Transparent Card for the entire schedule */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-8 md:p-16 flex flex-col transition-all duration-300"
          style={{
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.4)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span
              className="block text-xs tracking-[6px] uppercase mb-3 text-amber-700 font-bold"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              — The Big Day —
            </span>
            <h2
              className="font-semibold text-stone-900 drop-shadow-sm"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
            >
              📖 Event Schedule
            </h2>
          </div>

          {/* Main Content: Left Schedule | Right Schedule */}
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20">
            {/* LEFT SCHEDULE */}
            <div className="flex-1 flex flex-col gap-10">
              {SCHEDULE_LEFT.map((item, i) => (
                <div key={i} className="flex flex-col items-center md:items-end text-center md:text-right">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <span
                      className="text-base md:text-lg tracking-[4px] uppercase text-amber-800 font-extrabold"
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      {item.time}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">{item.event}</h3>
                  <p className="text-sm md:text-base text-stone-700 font-medium italic" style={{ fontFamily: 'Lato, sans-serif' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* RIGHT SCHEDULE */}
            <div className="flex-1 flex flex-col gap-10">
              {SCHEDULE_RIGHT.map((item, i) => (
                <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-base md:text-lg tracking-[4px] uppercase text-amber-800 font-extrabold"
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      {item.time}
                    </span>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">{item.event}</h3>
                  <p className="text-sm md:text-base text-stone-700 font-medium italic" style={{ fontFamily: 'Lato, sans-serif' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
