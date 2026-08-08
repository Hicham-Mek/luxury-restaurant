import React, { useState } from 'react'

const LINKS = {
  Navigate: [
    { label: 'Menu',         href: '#menu'        },
    { label: 'Chef\'s Table', href: '#specials'    },
    { label: 'Reserve',      href: '#reservation' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  Experience: [
    { label: 'Tasting Menu',  href: '#menu'        },
    { label: 'Wine Cellar',   href: '#menu'        },
    { label: 'Private Dining',href: '#reservation' },
    { label: 'Gift Cards',    href: '#contact'     },
  ],
}

const SOCIALS = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'TripAdvisor',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="13" r="3"/><circle cx="17" cy="13" r="3"/>
        <path d="M2 9h4M18 9h4M7 6C9 4 15 4 17 6"/>
      </svg>
    ),
  },
]

const Footer = () => {
  const [email, setEmail]     = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer id="contact" className="bg-deep-charcoal border-t border-white/5">

      {/* ── Top CTA band ── */}
      <div className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16
          flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="text-luxury-gold text-[10px] uppercase tracking-[0.4em] mb-2">
              Join Our World
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Receive Seasonal Menus &amp; Events
            </h3>
          </div>

          {subscribed ? (
            <p className="text-luxury-gold text-sm font-light tracking-wide">
              ✦ Thank you — you're on the list.
            </p>
          ) : (
            <form onSubmit={handleSubscribe}
              className="flex w-full sm:w-auto gap-0">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 sm:w-64 px-4 py-3 bg-charcoal border border-white/10
                  border-r-0 text-white text-sm font-light placeholder:text-white/25
                  focus:outline-none focus:border-luxury-gold transition-colors duration-300"
              />
              <button type="submit"
                className="px-5 py-3 gold-gradient text-white border border-white/25 cursor-pointer border-l-white/25 text-[10px]
                  uppercase tracking-[0.25em] font-medium hover:opacity-90
                  transition-opacity duration-300 shrink-0">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14 sm:py-20
        grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-8">

        {/* Brand column */}
        <div className="col-span-2 sm:col-span-1 flex flex-col gap-5">
          <a href="#" className="font-serif text-2xl tracking-[0.15em] text-gold-gradient">
            L'ÉCLAT
          </a>
          <p className="text-white/45 text-xs font-light leading-relaxed max-w-45">
            Fine dining in the heart of Tlemcen. Open Tuesday through Sunday, evening service only.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3 mt-1">
            {SOCIALS.map(({ label, href, icon }) => (
              <a key={label} href={href} aria-label={label}
                className="w-8 h-8 border border-white/10 flex items-center justify-center
                  text-white/35 hover:border-luxury-gold hover:text-luxury-gold
                  transition-all duration-300">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([heading, links]) => (
          <div key={heading} className="flex flex-col gap-4">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30 mb-1">
              {heading}
            </p>
            {links.map(({ label, href }) => (
              <a key={label} href={href}
                className="text-white/55 text-xs font-light hover:text-luxury-gold duration-300 hover:translate-x-0.5
                  inline-block transition-transform">
                {label}
              </a>
            ))}
          </div>
        ))}

        {/* Contact column */}
        <div className="flex flex-col gap-4">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/30 mb-1">
            Contact
          </p>
          <div className="flex flex-col gap-3 text-xs font-light text-white/55">
            <span>12 Rue des Artisans<br />Tlemcen, Algeria</span>
            <a href="tel:+213000000000"
              className="hover:text-luxury-gold transition-colors duration-300">
              +213 XXX XXX XXX
            </a>
            <a href="mailto:contact@leclat.dz"
              className="hover:text-luxury-gold transition-colors duration-300">
              contact@leclat.dz
            </a>
          </div>

          {/* Hours */}
          <div className="mt-2 pt-4 border-t border-white/8">
            <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 mb-2">Hours</p>
            <p className="text-white/45 text-[11px] font-light leading-relaxed">
              Tue – Sun<br />
              7:00 PM – 11:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5
          flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.25em]">
            © {new Date().getFullYear()} L'Éclat · All rights reserved
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms', 'Cookies'].map(item => (
              <a key={item} href="#"
                className="text-white/20 text-[10px] uppercase tracking-[0.2em]
                  hover:text-white/50 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer