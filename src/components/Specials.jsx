import React from 'react'

const STYLES = `
  @keyframes fadeLeft {
    from { opacity: 0; transform: translateX(-24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeRight {
    from { opacity: 0; transform: translateX(24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .anim-left  { animation: fadeLeft  0.9s cubic-bezier(0.22,1,0.36,1) both; }
  .anim-right { animation: fadeRight 0.9s cubic-bezier(0.22,1,0.36,1) both; }
  .anim-up    { animation: fadeUp    0.7s cubic-bezier(0.22,1,0.36,1) both; }
`

const ACCOLADES = [
  { value: '2',   label: 'Michelin Stars'   },
  { value: '18',  label: 'Years of Mastery' },
  { value: '340', label: 'Guests per Week'  },
]

const Specials = () => {
  return (
    <>
      <style>{STYLES}</style>

      <section id="specials" className="relative py-20 sm:py-28 bg-charcoal overflow-hidden">

        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 60px)',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">

          {/* ── Grid: image left, content right ── */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ── Image column ── */}
            <div className="anim-left relative" style={{ animationDelay: '0.1s' }}>
              {/* Gold frame offset */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-luxury-gold/30 pointer-events-none z-0" />

              <div className="relative overflow-hidden hover:scale-105 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
                  alt="Chef at work"
                  className="w-full h-72 sm:h-96 md:h-130 object-cover object-center
                    transition-transform duration-700 "
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Floating accolade badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6
                bg-deep-charcoal border border-luxury-gold/40 px-5 py-4 z-10">
                <p className="text-luxury-gold font-serif text-2xl">★★</p>
                <p className="text-white/60 text-[9px] uppercase tracking-[0.3em] mt-0.5">
                  Michelin Guide
                </p>
              </div>
            </div>

            {/* ── Content column ── */}
            <div className="anim-right flex flex-col gap-6" style={{ animationDelay: '0.2s' }}>

              {/* Label */}
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-luxury-gold/60" />
                <span className="text-luxury-gold text-[10px] uppercase tracking-[0.4em]">
                  Chef's Table
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                The Chef <br />
                <span className="text-gold-gradient italic">Experience</span>
              </h2>

              <div className="divider-thin w-16" />

              {/* Body */}
              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
                Under the direction of Executive Chef <span className="text-white font-normal">Julien Marchand</span>,
                every plate is a dialogue between classical French technique and bold contemporary vision.
                Ingredients sourced daily from artisan producers — nothing frozen, nothing ordinary.
              </p>

              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
                The Chef's Table seats just six guests per evening, offering an immersive
                seven-course tasting menu paired with a curated wine selection from our
                800-label cellar.
              </p>

              {/* Accolades row */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {ACCOLADES.map(({ value, label }, i) => (
                  <div
                    key={label}
                    className="anim-up text-center border-r border-white/10 last:border-0"
                    style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                  >
                    <p className="font-serif text-2xl sm:text-3xl text-luxury-gold">{value}</p>
                    <p className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] mt-1 leading-tight">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#reservation"
                  className="px-7 py-3.5 text-[11px] uppercase tracking-[0.25em]
                    gold-gradient text-luxury-gold border-luxury-gold/25 border  hover:border-luxury-gold  font-medium
                    hover:opacity-90 transition-opacity duration-300 text-center"
                >
                  Reserve Chef's Table
                </a>
                <a
                  href="#menu"
                  className="px-7 py-3.5 text-[11px] uppercase tracking-[0.25em]
                    border border-white/20 text-white/70
                    hover:border-luxury-gold hover:text-luxury-gold
                    transition-all duration-300 text-center"
                >
                  View Tasting Menu
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Specials