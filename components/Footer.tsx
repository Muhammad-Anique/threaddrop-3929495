import { Instagram, Twitter, Mail } from 'lucide-react'

const WHATSAPP_NUMBER = '+923204589040'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl tracking-tight mb-4">
              THREAD<span className="text-grey-400">DROP</span>
            </h3>
            <p className="text-grey-400 text-sm leading-relaxed">
              Premium streetwear for the bold. Limited drops, maximum impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-grey-400 hover:text-white transition-colors text-sm">
                  Collection
                </a>
              </li>
              <li>
                <a href="#waitlist" className="text-grey-400 hover:text-white transition-colors text-sm">
                  Join Waitlist
                </a>
              </li>
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-grey-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-grey-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>hello@threaddrop.com</span>
              </li>
              <li className="text-grey-400 text-sm">
                WhatsApp: {WHATSAPP_NUMBER}
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-grey-500 text-sm">
            © {currentYear} ThreadDrop. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-grey-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-grey-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}