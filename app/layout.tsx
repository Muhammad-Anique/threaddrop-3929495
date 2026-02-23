import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ThreadDrop | Streetwear Drops',
  description: 'Premium streetwear drops. Join the waitlist for exclusive access to limited edition T-shirts.',
  keywords: 'streetwear, fashion, t-shirts, drops, limited edition, urban fashion',
  openGraph: {
    title: 'ThreadDrop | Streetwear Drops',
    description: 'Premium streetwear drops. Join the waitlist for exclusive access.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  )
}