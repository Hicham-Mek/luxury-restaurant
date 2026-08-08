import React, { useState, useEffect, useCallback } from 'react'

const STYLES = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .t-animate {
    opacity: 0;
    animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
  }
  .quote-enter {
    animation: fadeIn 0.5s ease forwards;
  }
`

const REVIEWS = [
  {
    quote: 'An evening at L\'ÉCLAT is not a meal — it is a memory. Every course arrived like a chapter from a beautifully written novel.',
    author: 'Sophie Marceau',
    role: 'Le Figaro · Food Correspondent',
    stars: 5,
  },
  {
    quote: 'Chef Marchand\'s restraint is his genius. Nothing on the plate is accidental. The Wagyu alone justified the journey from London.',
    author: 'James Whitfield',
    role: 'The Guardian · Restaurant Critic',
    stars: 5,
  },
  {
    quote: 'Rare to find a kitchen with such technical mastery that still manages to feel deeply personal. L\'ÉCLAT earns every one of its stars.',
    author: 'Clara Fontaine',
    role: 'Gault & Millau · 2024',
    stars: 4,
  },
  {
    quote: 'The sommelier pairing was extraordinary — each wine didn\'t accompany the dish, it completed it. We will return.',
    author: 'David & Anne Laurent',
    role: 'Verified Guests · Chef\'s Table',
    stars: 4,
  },
]

const Stars = ({ count = 5 }) => (
  <div className="flex justify-center gap-1.5 mb-6">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M6 1l1.2 3.6H11L8.1 6.8l1.1 3.6L6 8.4l-3.2 2 1.1-3.6L1 4.6h3.8z"
          fill="#D4AF37" />
      </svg>
    ))}
  </div>
)

const Testimonials = () => {
  const [active, setActive]   = useState(0)
  const [animKey, setAnimKey] = useState(0)

  const goTo = useCallback((index) => {
    setActive(index)
    setAnimKey(k => k + 1)
  }, [])

  const prev = () => goTo((active - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => goTo((active + 1) % REVIEWS.length)

  /* Auto-advance every 6s */
  useEffect(() => {
    const id = setInterval(() => goTo(a => (a + 1) % REVIEWS.length), 6000)
    return () => clearInterval(id)
  }, [goTo])

  const review = REVIEWS[active]

  return (
    <>
      <style>{STYLES}</style>

      <section className="relative py-20 sm:py-28 bg-charcoal overflow-hidden">

        {/* Large decorative background quote mark */}
        <div
          className="absolute top-8 left-1/2 -translate-x-1/2 font-serif text-[220px] sm:text-[320px]
            leading-none text-luxury select-none pointer-events-none"
          aria-hidden="true"
        >
          "
        </div>

        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">

          {/* ── Section header ── */}
          <div className="t-animate mb-12 sm:mb-16" style={{ animationDelay: '0.05s' }}>
            <span className="text-luxury-gold text-[10px] uppercase tracking-[0.4em]">
              What Our Guests Say
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white mt-3 mb-5">
              Testimonials
            </h2>
            <div className="divider-thin w-24 mx-auto" />
          </div>

          {/* ── Review card ── */}
          <div
            key={animKey}
            className="quote-enter flex flex-col items-center"
          >
            <Stars count={review.stars} />

            <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl
              text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
              "{review.quote}"
            </blockquote>

            <div className="flex flex-col items-center gap-1">
              <span className="h-px w-8 bg-luxury-gold/50 mb-3" />
              <span className="text-white text-sm tracking-wide font-light">
                {review.author}
              </span>
              <span className="text-luxury-gold text-[10px] uppercase tracking-[0.3em]">
                {review.role}
              </span>
            </div>
          </div>

          {/* ── Controls ── */}
          <div className="flex items-center justify-center gap-6 mt-12">

            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 border border-white/15 flex items-center justify-center
                text-white/40 hover:border-luxury-gold hover:text-luxury-gold
                transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2.5">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`transition-all duration-400 rounded-none
                    ${i === active
                      ? 'w-6 h-px bg-luxury-gold'
                      : 'w-2 h-px bg-white/25 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 border border-white/15 flex items-center justify-center
                text-white/40 hover:border-luxury-gold hover:text-luxury-gold
                transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* ── Press logos row ── */}
          <div className="mt-16 pt-10 border-t border-white/8">
            <p className="text-white/25 text-[9px] uppercase tracking-[0.4em] mb-6">
              As featured in
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {['Le Figaro', 'The Guardian', 'Gault & Millau', 'Condé Nast'].map(pub => (
                <span key={pub}
                  className="font-serif text-white/20 text-sm sm:text-base italic
                    hover:text-luxury-gold/60 transition-colors duration-300 cursor-default">
                  {pub}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Testimonials