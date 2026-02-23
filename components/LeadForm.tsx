'use client'

import { useState, useRef, forwardRef } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react'

const LeadForm = forwardRef<HTMLElement>(function LeadForm(_, ref) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus('error')
      setErrorMessage('Please fill in all fields')
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            name: formData.name.trim(), 
            email: formData.email.trim().toLowerCase() 
          }
        ])

      if (error) {
        if (error.code === '23505') {
          setErrorMessage('This email is already on the waitlist!')
        } else {
          setErrorMessage('Something went wrong. Please try again.')
        }
        setStatus('error')
        return
      }

      setStatus('success')
      setFormData({ name: '', email: '' })
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section ref={ref} className="py-20 sm:py-32 bg-black text-white" id="waitlist">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-grey-400 mb-4 block">
            Join the Waitlist
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Be the First to Know
          </h2>
          <p className="text-lg text-grey-400 max-w-xl mx-auto">
            Get exclusive early access to our drops, limited editions, and special offers.
          </p>
        </div>

        {/* Form */}
        {status === 'success' ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">You&apos;re on the list!</h3>
            <p className="text-grey-400">
              We&apos;ll notify you as soon as the drop goes live. Stay tuned!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-grey-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-grey-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-grey-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-grey-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-grey-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Joining...
                </>
              ) : (
                <>
                  Join Waitlist
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Privacy Note */}
            <p className="text-sm text-grey-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  )
})

export default LeadForm