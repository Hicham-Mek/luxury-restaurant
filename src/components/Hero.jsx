import React from 'react'

const STYLES = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes scrollBounce {
    0%, 100% { transform: translateY(0);   }
    50%       { transform: translateY(6px); }
  }
  .hero-animate {
    opacity: 0;
    animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  .hero-fade {
    opacity: 0;
    animation: fadeIn 1.2s ease forwards;
  }
`

const Hero = () => {
  return (
    <>
      <style>{STYLES}</style>

      <section className="relative h-screen min-h-150 flex items-center justify-center overflow-hidden">

        {/* ── Background image ── */}
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ animation: 'fadeIn 1.8s ease forwards' }}
        />

        {/* ── Single balanced overlay — dark enough for contrast, light enough to see the image ── */}
        <div className="absolute inset-0 bg-black/50" />

        {/* ── Grain texture ── */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px',
          }}
        />

        {/* ── Hero content ── */}
        <div className="relative z-10 text-center px-5 sm:px-8 max-w-4xl mx-auto">

          {/* Pre-title badge */}
          <div
            className="hero-animate inline-flex items-center gap-3 mb-6 sm:mb-8"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="h-px w-8 sm:w-12 bg-luxury-gold/70" />
            <span className="text-luxury-gold text-[10px] sm:text-[11px] uppercase tracking-[0.35em] font-light">
              Est. 2010 · Paris
            </span>
            <span className="h-px w-8 sm:w-12 bg-luxury-gold/70" />
          </div>

          {/* Main heading */}
          <h1
            className="hero-animate font-serif text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight"
            style={{ animationDelay: '0.25s' }}
          >
            A Symphony of{' '}
            <span className="text-gold-linear italic">Flavors</span>
          </h1>

          {/* Gold ornamental divider */}
          <div
            className="hero-animate flex items-center justify-center gap-3 my-6 sm:my-8"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="h-px w-12 sm:w-20 bg-linear-to-r from-transparent to-luxury-gold/60" />
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1 L9.5 6.5 L15 8 L9.5 9.5 L8 15 L6.5 9.5 L1 8 L6.5 6.5 Z"
                fill="#D4AF37" opacity="0.9" />
            </svg>
            <span className="h-px w-12 sm:w-20 bg-linear-to-l from-transparent to-luxury-gold/60" />
          </div>

          {/* Description — white/90 so it reads clearly on any dark bg */}
          <p
            className="hero-animate text-white/80 text-sm sm:text-base font-light leading-relaxed
              max-w-sm sm:max-w-md mx-auto tracking-wide"
            style={{ animationDelay: '0.5s' }}
          >
            Where culinary artistry meets timeless elegance.
            An intimate dining experience crafted for those
            who appreciate the extraordinary.
          </p>

          {/* CTA buttons */}
          <div
            className="hero-animate mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            style={{ animationDelay: '0.65s' }}
          >
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-3.5 text-sm uppercase tracking-[0.25em]
                gold-linear text-gold-linear font-medium
                hover:opacity-50 transition-opacity duration-300"
            >
              Explore Menu
            </a>
            <a
              href="#reservation"
              className="w-full sm:w-auto px-8 py-3.5 text-sm uppercase tracking-[0.25em]
                border border-white/50 text-white rounded-sm font-medium
                hover:border-luxury-gold hover:text-luxury-gold
                transition-all duration-300"
            >
              Reserve a Table
            </a>
          </div>

          {/* Opening hours — bumped to white/60 so it's legible but still subtle */}
          <p
            className="hero-animate mt-6 text-white/70 text-[12px] uppercase tracking-[0.3em]"
            style={{ animationDelay: '0.8s' }}
          >
            Open Tuesday – Sunday · 7 PM to 11 PM
          </p>
        </div>

        {/* ── Scroll indicator ── */}
        <div
          className="hero-fade absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animationDelay: '1.2s' }}
          aria-hidden="true"
        >
          <span className="text-white/50 text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <div
            className="w-0.5 h-8 bg-linear-to-b from-luxury-gold/80 to-luxury-gold/40"
            style={{ animation: 'scrollBounce 2s ease-in-out infinite' }}
          />
        </div>

        {/* ── Bottom vignette into next section ── */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-deep-charcoal to-transparent" />
      </section>
    </>
  )
}

export default Hero