'use client'

import { useState, useEffect } from 'react'
import { ArrowDown, Sparkles } from 'lucide-react'

interface HeroProps {
  onNotifyClick: () => void
}

export default function Hero({ onNotifyClick }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set drop date to 7 days from now
    const dropDate = new Date()
    dropDate.setDate(dropDate.getDate() + 7)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = dropDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-grey-900 to-grey-800 opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium tracking-wide uppercase">Limited Drop Coming Soon</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
          THREAD
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-grey-400">
            DROP
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-grey-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Premium streetwear for the bold. Join the waitlist for exclusive early access to our limited edition drops.
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-12">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Mins' },
            { value: timeLeft.seconds, label: 'Secs' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg mb-2">
                <span className="text-2xl sm:text-3xl font-bold">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-grey-400 uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onNotifyClick}
          className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-grey-200 hover:scale-105 hover:shadow-2xl"
        >
          Notify Me
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>

        {/* Social Proof */}
        <p className="mt-8 text-sm text-grey-400">
          Join <span className="text-white font-semibold">500+</span> fashion enthusiasts on the waitlist
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-grey-500" />
      </div>
    </section>
  )
}