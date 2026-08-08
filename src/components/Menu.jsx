import React, { useState } from 'react'

const MENU = {
  Starters: [
    { name: 'Truffle Velouté',      desc: 'Black truffle, crème fraîche, chive oil',          price: '€24' },
    { name: 'Scallops Carpaccio',   desc: 'Hand-dived scallops, yuzu, micro herbs',            price: '€28' },
    { name: 'Foie Gras Terrine',    desc: 'Brioche toast, fig compote, Sauternes gel',         price: '€32' },
  ],
  Mains: [
    { name: 'Wagyu Beef Tenderloin',desc: 'Grade A5, pomme purée, périgueux sauce',            price: '€68' },
    { name: 'Turbot en Croûte',     desc: 'Wild turbot, seaweed butter, fennel velouté',       price: '€54' },
    { name: 'Duck à l\'Orange',     desc: 'Confit leg, blood orange, endive tatin',            price: '€46' },
  ],
  Desserts: [
    { name: 'Valrhona Soufflé',     desc: '72% dark chocolate, vanilla crème anglaise',       price: '€18' },
    { name: 'Tarte Tatin',          desc: 'Caramelised apple, Calvados chantilly',             price: '€16' },
    { name: 'Mille-Feuille',        desc: 'Vanilla diplomat cream, caramelised puff pastry',  price: '€17' },
  ],
}

const TABS = Object.keys(MENU)

const STYLES = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .menu-item {
    opacity: 0;
    animation: fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
  }
`

const Menu = () => {
  const [active, setActive] = useState(TABS[0])

  return (
    <>
      <style>{STYLES}</style>

      <section id="menu" className="py-20 sm:py-28 bg-deep-charcoal">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">

          {/* ── Section header ── */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-luxury-gold text-[10px] uppercase tracking-[0.4em]">
              Saison 2025
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white mt-3 mb-5">
              Our Menu
            </h2>
            <div className="divider-thin w-24 mx-auto" />
          </div>

          {/* ── Tabs ── */}
          <div className="flex justify-center gap-0 mb-10 sm:mb-14 border border-white/10">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`cursor-pointer
                  flex-1 py-3 text-[10px] sm:text-[11px] uppercase tracking-[0.25em]
                  transition-all duration-300 font-light
                  ${active === tab
                    ? 'bg-luxury-gold text-deep-charcoal font-medium'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ── Menu items ── */}
          <div className="space-y-0 " key={active}>
            {MENU[active].map((item, i) => (
              <div
                key={item.name}
                className="menu-item group flex items-start justify-between gap-4
                  py-5 border-b border-white/8 last:border-0
                  hover:bg-white/2 transition-colors duration-200 px-2 -mx-2"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {/* Left: name + description */}
                <div className="flex-1 min-w-0 ">
                  <h4 className="text-white text-sm sm:text-xl font-serif tracking-wide
                    group-hover:text-luxury-gold transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-white/45 text-xs sm:text-sm font-light mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Dot leader */}
                <div className="hidden sm:flex flex-1 items-end pb-2 min-w-10">
                  <span className="w-full border-b border-dotted border-white/15" />
                </div>

                {/* Price */}
                <span className="text-luxury-gold font-light text-sm sm:text-base
                  tracking-wide shrink-0 mt-0.5">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          {/* ── Footer note ── */}
          <p className="mt-10 text-center text-white/25 text-[10px] uppercase tracking-[0.3em]">
            All dishes contain allergen information available on request
          </p>

        </div>
      </section>
    </>
  )
}

export default Menu