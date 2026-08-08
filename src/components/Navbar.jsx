import React, { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Menu',    href: '#menu'        },
  { label: 'Chef',    href: '#specials'    },
  { label: 'Reserve', href: '#reservation' },
  { label: 'Contact', href: '#contact'     },
]

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Navbar ── */}
      <nav className={`fixed inset-x-0 top-0 z-50 border-b border-white/5 transition-all duration-300 px-6
        ${scrolled ? 'bg-deep-charcoal/95 backdrop-blur-xl py-3' : 'bg-charcoal/80 backdrop-blur-md py-5'}`}
      >
        <div className="max-w-7xl mx-auto  sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="font-serif text-xl sm:text-2xl tracking-widest text-gold-gradient">
            L'ÉCLAT
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href}
                  className="text-[11px] uppercase tracking-[0.2em] text-white/70 hover:text-luxury-gold transition-colors duration-300">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a href="#reservation"
              className="px-4 py-2 text-[11px] uppercase tracking-[0.2em] border border-luxury-gold rounded-sm font-bold
                text-luxury-gold hover:bg-luxury-gold hover:text-deep-charcoal transition-all duration-300">
              Book a Table
            </a>

            <button aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}
              onClick={() => setMenuOpen(p => !p)}
              className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center">
              <span className={`block w-6 h-px bg-luxury-gold transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block w-4 h-px bg-luxury-gold ml-auto transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-px bg-luxury-gold transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile backdrop ── */}
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden" />
      )}

      {/* ── Mobile drawer ── */}
      <aside className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[80vw] bg-deep-charcoal
        border-l border-white/5 flex flex-col md:hidden
        transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <span className="font-serif text-luxury-gold tracking-widest">L'ÉCLAT</span>
          <button aria-label="Close menu" onClick={() => setMenuOpen(false)}
            className="text-white/40 hover:text-luxury-gold transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col px-6 pt-6 flex-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              className="py-4 border-b border-white/5 text-[11px] uppercase tracking-[0.25em]
                text-white/60 hover:text-luxury-gold transition-colors duration-200">
              {label}
            </a>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="px-6 py-8">
          <a href="#reservation" onClick={() => setMenuOpen(false)}
            className="block w-full py-3.5 text-center text-[11px] uppercase tracking-[0.25em]
              gold-gradient text-deep-charcoal font-medium hover:opacity-90 transition-opacity">
            Book a Table
          </a>
        </div>
      </aside>
    </>
  )
}

export default Navbar