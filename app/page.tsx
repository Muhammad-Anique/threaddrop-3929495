'use client'

import { useRef } from 'react'
import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import LeadForm from '@/components/LeadForm'
import WhatsAppCTA from '@/components/WhatsAppCTA'

export default function Home() {
  const leadFormRef = useRef<HTMLElement>(null)

  const scrollToWaitlist = () => {
    leadFormRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen">
      <Hero onNotifyClick={scrollToWaitlist} />
      <ProductShowcase />
      <LeadForm ref={leadFormRef} />
      <WhatsAppCTA />
    </main>
  )
}