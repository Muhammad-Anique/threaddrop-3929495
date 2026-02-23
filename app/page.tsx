'use client'

import { useRef } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'
import WhatsAppCTA from '@/components/WhatsAppCTA'

export default function Home() {
  const leadFormRef = useRef<HTMLElement>(null)

  const scrollToWaitlist = () => {
    leadFormRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen">
      <Navbar onWaitlistClick={scrollToWaitlist} />
      <Hero onNotifyClick={scrollToWaitlist} />
      <ProductShowcase />
      <LeadForm ref={leadFormRef} />
      <Footer />
      <WhatsAppCTA />
    </main>
  )
}