'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GiDiamondRing, GiWineGlass, GiKnifeFork, GiCakeSlice, GiPartyPopper, GiSparkles } from 'react-icons/gi'
import { FaHeart } from 'react-icons/fa'

const TIMELINE_EVENTS = [
  {
    time: '4:00 PM',
    title: 'Ceremony',
    icon: <GiDiamondRing className="w-12 h-12 md:w-16 md:h-16" />,
    align: 'left'
  },
  {
    time: '5:00 PM',
    title: 'Cocktail Hour',
    icon: <GiWineGlass className="w-12 h-12 md:w-16 md:h-16" />,
    align: 'right'
  },
  {
    time: '6:00 PM',
    title: 'Dinner',
    icon: <GiKnifeFork className="w-12 h-12 md:w-16 md:h-16" />,
    align: 'left'
  },
  {
    time: '7:30 PM',
    title: 'Cake Cutting',
    icon: <GiCakeSlice className="w-12 h-12 md:w-16 md:h-16" />,
    align: 'right'
  },
  {
    time: '8:00 PM',
    title: 'Party',
    icon: <GiPartyPopper className="w-12 h-12 md:w-16 md:h-16" />,
    align: 'left'
  },
  {
    time: '11:00 PM',
    title: 'Send Off',
    icon: <GiSparkles className="w-12 h-12 md:w-16 md:h-16" />,
    align: 'right'
  }
]

export default function VisionMissionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll position over the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // The central line grows from 0% to 100% based on scroll progress
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"])

  // Title Animations
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
  }

  const itemVariants = (align: string) => ({
    hidden: { opacity: 0, x: align === 'left' ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  })

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 10 } }
  }

  // Viewport margin that triggers animations when element is near the center of the screen
  const triggerViewport = { once: false, margin: "-40% 0px -40% 0px" }

  return (
    <section
      ref={containerRef}
      id="details"
      className="relative py-24 md:py-32 bg-[#faf8f5] text-[#5c5248] overflow-hidden min-h-screen flex flex-col items-center"
    >
      {/* Background Floral Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-stone-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-200/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-20% 0px" }}
        variants={titleVariants}
        className="text-center mb-16 relative z-10"
      >
        <h2
          className="text-6xl md:text-8xl"
          style={{ fontFamily: '"Pinyon Script", cursive', color: '#5c5248' }}
        >
          Wedding Timeline
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4 opacity-70">
          <div className="w-12 h-px bg-[#c2b4a3]" />
          <FaHeart className="w-3 h-3 text-[#c2b4a3]" />
          <div className="w-12 h-px bg-[#c2b4a3]" />
        </div>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl mx-auto px-4 z-10">
        
        {/* The Central Background Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
          <div className="w-full h-full bg-[#e3dcd1]" />
          {/* Animated Scroll Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 left-0 w-full bg-[#c2b4a3] origin-top"
          />
        </div>

        {/* Timeline Events */}
        <div className="py-10 space-y-32 md:space-y-48">
          {TIMELINE_EVENTS.map((event, index) => {
            const isLeft = event.align === 'left'

            return (
              <div key={index} className="relative flex items-center justify-center w-full">
                
                {/* Center Node (Triggers when it hits the center of screen) */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={triggerViewport}
                  variants={nodeVariants}
                  className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-[3px] border-[#c2b4a3] bg-[#faf8f5] flex items-center justify-center z-20"
                  style={{ boxShadow: '0 0 0 4px #faf8f5' }}
                >
                  <FaHeart className="w-3 h-3 text-[#c2b4a3]" />
                </motion.div>

                {/* Connecting Line to Content */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '2rem' }}
                  viewport={triggerViewport}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className={`absolute top-1/2 -translate-y-1/2 h-px bg-[#c2b4a3] z-10
                    ${isLeft ? 'right-[50%] mr-4' : 'left-[50%] ml-4'}`}
                />

                {/* Content Wrapper */}
                <div className="flex w-full">
                  {/* Left Side */}
                  <div className={`w-1/2 pr-8 md:pr-16 flex justify-end ${!isLeft ? 'invisible' : ''}`}>
                    {isLeft && (
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={triggerViewport}
                        variants={itemVariants('left')}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-6"
                      >
                        <div className="text-right text-[#5c5248]">
                          <div className="font-bold tracking-wider" style={{ fontFamily: 'Lato, sans-serif' }}>
                            {event.time}
                          </div>
                          <div className="text-xl mt-1" style={{ fontFamily: '"Playfair Display", serif' }}>
                            {event.title}
                          </div>
                        </div>
                        <div className="text-[#8c8273]">
                          {event.icon}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Side */}
                  <div className={`w-1/2 pl-8 md:pl-16 flex justify-start ${isLeft ? 'invisible' : ''}`}>
                    {!isLeft && (
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={triggerViewport}
                        variants={itemVariants('right')}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-6"
                      >
                        <div className="text-[#8c8273]">
                          {event.icon}
                        </div>
                        <div className="text-left text-[#5c5248]">
                          <div className="font-bold tracking-wider" style={{ fontFamily: 'Lato, sans-serif' }}>
                            {event.time}
                          </div>
                          <div className="text-xl mt-1" style={{ fontFamily: '"Playfair Display", serif' }}>
                            {event.title}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Footer Details */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-10% 0px" }}
        variants={titleVariants}
        className="mt-40 w-full max-w-2xl px-6 relative z-10"
      >
        <div className="w-full h-px bg-[#c2b4a3] mb-12 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#faf8f5] px-4">
              <FaHeart className="w-4 h-4 text-[#c2b4a3]" />
           </div>
        </div>

        <div className="text-center text-[#5c5248]">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-4xl md:text-5xl tracking-widest uppercase" style={{ fontFamily: '"Playfair Display", serif' }}>Emma</span>
            <span className="text-4xl md:text-5xl -mt-2" style={{ fontFamily: '"Pinyon Script", cursive' }}>and</span>
            <span className="text-4xl md:text-5xl tracking-widest uppercase" style={{ fontFamily: '"Playfair Display", serif' }}>Liam</span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6 opacity-60">
            <div className="w-8 h-px bg-[#5c5248]" />
            <FaHeart className="w-3 h-3 text-[#5c5248]" />
            <div className="w-8 h-px bg-[#5c5248]" />
          </div>

          <div className="tracking-[3px] uppercase space-y-2 text-sm md:text-base opacity-80" style={{ fontFamily: 'Lato, sans-serif' }}>
            <p className="font-bold">October 15, 2026</p>
            <p>The Willow Gardens • Florence, Italy</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
