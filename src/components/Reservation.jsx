import React, { useState } from "react";

const STYLES = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .res-animate {
    opacity: 0;
    animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
  }

  /* Kill default date/time browser chrome */
  input[type="date"]::-webkit-calendar-picker-indicator,
  input[type="time"]::-webkit-calendar-picker-indicator {
    filter: invert(0.4);
    cursor: pointer;
  }
  input[type="date"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    display: none;
  }

  /* Luxury input focus ring */
  .luxury-input:focus {
    outline: none;
    border-color: #D4AF37;
    box-shadow: 0 0 0 1px #D4AF37;
  }
  .luxury-input::placeholder {
    color: rgba(255,255,255,0.25);
    font-weight: 300;
    letter-spacing: 0.05em;
  }
  select.luxury-input option {
    background: #121212;
    color: white;
  }
`;

const PARTY_SIZES = [
  "1 Guest",
  "2 Guests",
  "3 Guests",
  "4 Guests",
  "5 Guests",
  "6+ Guests",
];
const OCCASIONS = [
  "None",
  "Anniversary",
  "Birthday",
  "Business Dinner",
  "Proposal",
  "Other",
];

const Field = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-light">
      {label}
    </label>
    {children}
  </div>
);

const inputClass = `
  luxury-input w-full bg-charcoal border border-white/10
  px-4 py-3.5 text-white text-sm font-light
  transition-all duration-300
`;

const Reservation = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    notes: "",
  });

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{STYLES}</style>

      <section id="reservation" className="py-20 sm:py-28 bg-deep-charcoal">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          {/* ── Section header ── */}
          <div
            className="text-center mb-12 sm:mb-16 res-animate"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="text-luxury-gold text-[10px] uppercase tracking-[0.4em]">
              Secure your evening
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white mt-3 mb-5">
              Reserve a Table
            </h2>
            <div className="divider-thin w-24 mx-auto" />
            <p className="text-white/50 text-sm font-light mt-5 leading-relaxed">
              Reservations recommended. We hold your table for 15 minutes past
              the booking time.
            </p>
          </div>

          {/* ── Success state ── */}
          {submitted ? (
            <div className="res-animate text-center py-16 border border-luxury-gold/30 bg-luxury-gold/5">
              <p className="text-luxury-gold font-serif text-3xl mb-3">
                Merci, {form.name.split(" ")[0]}.
              </p>
              <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs mx-auto">
                Your reservation request has been received. We'll confirm by
                email within 2 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-luxury-gold transition-colors duration-300"
              >
                Make another reservation
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="res-animate flex flex-col gap-5"
              style={{ animationDelay: "0.15s" }}
            >
              {/* Row 1: Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name">
                  <input
                    required
                    type="text"
                    placeholder="Jean Dupont"
                    value={form.name}
                    onChange={set("name")}
                    className={inputClass}
                  />
                </Field>
                <Field label="Email Address">
                  <input
                    required
                    type="email"
                    placeholder="jean@example.com"
                    value={form.email}
                    onChange={set("email")}
                    className={inputClass}
                  />
                </Field>
              </div>

              {/* Row 2: Date + Time */}
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Date">
                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={set("date")}
                    className={inputClass}
                  />
                </Field>
                <Field label="Time">
                  <input
                    required
                    type="time"
                    value={form.time}
                    onChange={set("time")}
                    className={inputClass}
                    min="19:00"
                    max="22:30"
                  />
                </Field>
              </div>

              {/* Row 3: Guests + Occasion */}
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Party Size">
                  <select
                    required
                    value={form.guests}
                    onChange={set("guests")}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select guests
                    </option>
                    {PARTY_SIZES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Special Occasion">
                  <select
                    value={form.occasion}
                    onChange={set("occasion")}
                    className={inputClass}
                  >
                    {OCCASIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Row 4: Notes */}
              <Field label="Additional Requests">
                <textarea
                  rows={3}
                  placeholder="Dietary requirements, wine preferences, allergies…"
                  value={form.notes}
                  onChange={set("notes")}
                  className={`${inputClass} resize-none`}
                />
              </Field>

              {/* Divider */}
              <div className="divider-thin" />

              {/* Submit */}
              <button
                type="submit"
                className="relative overflow-hidden w-full py-4 text-[11px] uppercase
                  tracking-[0.3em] font-medium gold-gradient text-white 
                  hover:opacity-100 hover:shadow-md hover:shadow-luxury-gold/50 
                  transition-all duration-300 mt-1 border border-luxury-gold/60
                   cursor-pointer"
              >
                Confirm Reservation
              </button>

              {/* Privacy note */}
              <p className="text-center text-white/25 text-[9px] uppercase tracking-[0.25em]">
                Your details are kept private and never shared.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Reservation;
