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

      {/* Single Large Transparent Card for the entire schedule */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-8 md:p-16 flex flex-col transition-all duration-300 overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 0 32px rgba(255,255,255,0.02)',
          }}
        >
          {/* Header */}
          <div className="relative text-center mb-12">
            <span
              className="block text-xs tracking-[6px] uppercase mb-3 text-amber-400 font-bold"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              — The Big Day —
            </span>
            <h2
              className="font-normal text-white drop-shadow-md"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
            >
              📖 Event Schedule
            </h2>
          </div>

          {/* Main Content: Left Schedule | Right Schedule */}
          <div className="relative flex flex-col md:flex-row justify-center gap-12 md:gap-20">
            {/* LEFT SCHEDULE */}
            <div className="flex-1 flex flex-col gap-10">
              {SCHEDULE_LEFT.map((item, i) => (
                <div key={i} className="relative flex flex-col items-center md:items-end text-center md:text-right hover:scale-105 transition-transform duration-300 cursor-default p-4 group">
                  <div className="relative flex items-center justify-center md:justify-end gap-3 mb-2 w-full">
                    <div className="absolute right-0 w-[150px] h-[40px] bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <span className="relative text-2xl z-10">{item.icon}</span>
                    <span
                      className="relative text-base md:text-lg tracking-[4px] uppercase text-amber-400 font-extrabold z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      {item.time}
                    </span>
                  </div>
                  <h3 className="relative text-2xl md:text-3xl font-bold text-white mb-2 z-10">{item.event}</h3>
                  <p className="relative text-sm md:text-base text-white/70 font-medium italic z-10" style={{ fontFamily: 'Lato, sans-serif' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* RIGHT SCHEDULE */}
            <div className="flex-1 flex flex-col gap-10">
              {SCHEDULE_RIGHT.map((item, i) => (
                <div key={i} className="relative flex flex-col items-center md:items-start text-center md:text-left hover:scale-105 transition-transform duration-300 cursor-default p-4 group">
                  <div className="relative flex items-center justify-center md:justify-start gap-3 mb-2 w-full">
                    <div className="absolute left-0 w-[150px] h-[40px] bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <span
                      className="relative text-base md:text-lg tracking-[4px] uppercase text-amber-400 font-extrabold z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      {item.time}
                    </span>
                    <span className="relative text-2xl z-10">{item.icon}</span>
                  </div>
                  <h3 className="relative text-2xl md:text-3xl font-bold text-white mb-2 z-10">{item.event}</h3>
                  <p className="relative text-sm md:text-base text-white/70 font-medium italic z-10" style={{ fontFamily: 'Lato, sans-serif' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
