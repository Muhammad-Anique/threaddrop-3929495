'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  onWaitlistClick: () => void
}

export default function Navbar({ onWaitlistClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white font-bold text-xl tracking-tight"
          >
            THREAD<span className="text-grey-400">DROP</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('products')}
              className="text-grey-300 hover:text-white transition-colors text-sm font-medium"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="text-grey-300 hover:text-white transition-colors text-sm font-medium"
            >
              Waitlist
            </button>
            <button
              onClick={onWaitlistClick}
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-grey-200 transition-colors"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="text-grey-300 hover:text-white transition-colors text-sm font-medium text-left"
              >
                Collection
              </button>
              <button
                onClick={() => scrollToSection('waitlist')}
                className="text-grey-300 hover:text-white transition-colors text-sm font-medium text-left"
              >
                Waitlist
              </button>
              <button
                onClick={() => {
                  onWaitlistClick()
                  setIsMobileMenuOpen(false)
                }}
                className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-grey-200 transition-colors w-fit"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}