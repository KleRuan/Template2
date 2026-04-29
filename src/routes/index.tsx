import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: RestaurantHome,
})

// ── Data ──────────────────────────────────────────────────────────────────────

const menuCategories = [
  {
    name: 'Starters (TO be edited)',
    items: [
      { name: 'Bruschetta al Pomodoro', description: 'Toasted sourdough, fresh tomatoes, basil, aged balsamic', price: 9 },
      { name: 'Burrata & Prosciutto', description: 'Creamy burrata, Parma ham, arugula, truffle oil', price: 14 },
      { name: 'Calamari Fritti', description: 'Crispy fried squid, lemon aioli, marinara', price: 12 },
    ],
  },
  {
    name: 'Mains',
    items: [
      { name: 'Grilled Sea Bass', description: 'Mediterranean sea bass, saffron butter, roasted vegetables', price: 28 },
      { name: 'Pappardelle al Ragù', description: 'Slow-cooked Wagyu beef ragù, parmigiano, fresh herbs', price: 24 },
      { name: 'Osso Buco Milanese', description: 'Braised veal shank, gremolata, saffron risotto', price: 34 },
      { name: 'Margherita Classica', description: 'San Marzano tomato, fior di latte, fresh basil (V)', price: 18 },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Tiramisù della Casa', description: 'Classic house recipe, Illy espresso, Savoiardi', price: 9 },
      { name: 'Panna Cotta', description: 'Vanilla bean, seasonal berry compote', price: 8 },
      { name: 'Affogato al Caffè', description: 'Madagascan vanilla gelato, double espresso shot', price: 7 },
    ],
  },
]

const reviews = [
  {
    name: 'Sofia M.',
    rating: 5,
    text: 'The Osso Buco was absolutely divine — melt-in-your-mouth perfection. The atmosphere is warm and intimate, perfect for a special occasion.',
    date: 'March 2026',
  },
  {
    name: 'James T.',
    rating: 5,
    text: 'We ordered the tasting menu and were blown away at every course. Exceptional service and a wine list that rivals anything in the city.',
    date: 'February 2026',
  },
  {
    name: 'Amara K.',
    rating: 4,
    text: 'Stunning food and beautiful decor. The Burrata starter alone was worth the visit. Will definitely be back for Sunday brunch.',
    date: 'April 2026',
  },
]

const branches = [
  {
    id: 1,
    name: 'Bella Tavola – Downtown',
    address: '42 Olive Street, Downtown',
    phone: '+1 (555) 010-2030',
    hours: 'Mon–Sun · 12 pm – 11 pm',
    mapUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=-74.0060%2C40.7128%2C-73.9960%2C40.7200&layer=mapnik',
  },
  {
    id: 2,
    name: 'Bella Tavola – Riverside',
    address: '8 Marina Promenade, Riverside',
    phone: '+1 (555) 040-5060',
    hours: 'Mon–Sun · 11 am – 10 pm',
    mapUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=-74.0200%2C40.7050%2C-74.0100%2C40.7128&layer=mapnik',
  },
]

// ── Helpers ────────────────────────────────────────────────────────────────────

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

function Stars({ count }: { count: number }) {
  return (
    <span className="text-amber-400 text-lg tracking-tight" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  )
}

// ── Sections ──────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0a00 0%, #3d1a00 50%, #1a0a00 100%)',
      }}
    >
      {/* decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #c8860a, transparent)' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #c8860a, transparent)' }} />
      </div>

      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        <p className="text-amber-400 tracking-[0.3em] text-sm font-medium uppercase mb-4">
          Fine Italian Dining
        </p>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: 'Georgia, serif' }}>
          Bella Tavola
        </h1>
        <p className="text-stone-300 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Handcrafted pasta, locally sourced ingredients, and centuries of Italian culinary tradition — all in one table.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all"
            style={{ background: '#c8860a', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#a36908')}
            onMouseLeave={e => (e.currentTarget.style.background = '#c8860a')}
          >
            View Menu
          </a>
          <a
            href="#delivery"
            className="px-8 py-4 rounded-full text-sm font-semibold tracking-wide border border-amber-400 text-amber-400 transition-all hover:bg-amber-400 hover:text-stone-900"
          >
            Order Delivery
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

function MenuSection() {
  const [active, setActive] = useState(menuCategories[0].name)
  const category = menuCategories.find(c => c.name === active)!

  return (
    <section id="menu" className="py-24 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-amber-700 tracking-widest text-xs font-semibold uppercase text-center mb-2">
          Our Menu
        </p>
        <h2 className="text-4xl font-bold text-center text-stone-900 mb-3"
          style={{ fontFamily: 'Georgia, serif' }}>
          Crafted with Passion
        </h2>
        <p className="text-stone-500 text-center mb-10 max-w-md mx-auto">
          Every dish celebrates seasonal ingredients and traditional technique.
        </p>

        {/* Tab bar */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {menuCategories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all border ${
                active === cat.name
                  ? 'bg-amber-700 text-white border-amber-700'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-amber-400'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {category.items.map(item => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex justify-between gap-4 hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">{item.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="shrink-0 text-amber-700 font-bold text-lg">
                ${item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DeliveryFormSection() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    'bot-field': '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('/delivery-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'delivery', ...fields }),
      })
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="delivery" className="py-24 px-6"
      style={{ background: 'linear-gradient(135deg, #1a0a00, #3d1a00)' }}>
      <div className="max-w-2xl mx-auto">
        <p className="text-amber-400 tracking-widest text-xs font-semibold uppercase text-center mb-2">
          Delivery
        </p>
        <h2 className="text-4xl font-bold text-center text-white mb-3"
          style={{ fontFamily: 'Georgia, serif' }}>
          Order to Your Door
        </h2>
        <p className="text-stone-400 text-center mb-10">
          Fill in the form and our team will confirm your order within 15 minutes.
        </p>

        {status === 'done' ? (
          <div className="text-center bg-amber-900/30 border border-amber-600 rounded-2xl p-12">
            <div className="text-5xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-white mb-2">Order Received!</h3>
            <p className="text-stone-400">We'll call you shortly to confirm the details.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Netlify hidden fields */}
            <input type="hidden" name="form-name" value="delivery" />
            <div style={{ display: 'none' }}>
              <input name="bot-field" onChange={handleChange} />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-stone-300 text-sm mb-1.5 font-medium">Full Name *</label>
                <input
                  type="text" name="name" required value={fields.name} onChange={handleChange}
                  placeholder="Jane Doe"
                  className="w-full bg-stone-900/60 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-stone-300 text-sm mb-1.5 font-medium">Email *</label>
                <input
                  type="email" name="email" required value={fields.email} onChange={handleChange}
                  placeholder="jane@example.com"
                  className="w-full bg-stone-900/60 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-stone-300 text-sm mb-1.5 font-medium">Phone *</label>
                <input
                  type="tel" name="phone" required value={fields.phone} onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-stone-900/60 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-stone-300 text-sm mb-1.5 font-medium">Delivery Address *</label>
                <input
                  type="text" name="address" required value={fields.address} onChange={handleChange}
                  placeholder="123 Main St, City"
                  className="w-full bg-stone-900/60 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-300 text-sm mb-1.5 font-medium">
                Order Details / Special Requests
              </label>
              <textarea
                name="message" rows={4} value={fields.message} onChange={handleChange}
                placeholder="e.g. 2× Pappardelle al Ragù, 1× Tiramisù — no nuts please"
                className="w-full bg-stone-900/60 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 rounded-xl font-semibold text-white transition-all disabled:opacity-60"
              style={{ background: '#c8860a' }}
            >
              {status === 'sending' ? 'Sending…' : 'Place Order'}
            </button>

            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}

function BranchesSection() {
  const [selected, setSelected] = useState(branches[0])

  return (
    <section id="branches" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-amber-700 tracking-widest text-xs font-semibold uppercase text-center mb-2">
          Locations
        </p>
        <h2 className="text-4xl font-bold text-center text-stone-900 mb-3"
          style={{ fontFamily: 'Georgia, serif' }}>
          Find Us
        </h2>
        <p className="text-stone-500 text-center mb-12 max-w-md mx-auto">
          Two locations to serve you — each with the same dedication to quality.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Branch cards */}
          <div className="flex flex-col gap-4">
            {branches.map(branch => (
              <button
                key={branch.id}
                onClick={() => setSelected(branch)}
                className={`text-left p-6 rounded-2xl border transition-all ${
                  selected.id === branch.id
                    ? 'border-amber-500 bg-amber-50 shadow-md'
                    : 'border-stone-200 bg-white hover:border-amber-300'
                }`}
              >
                <h3 className="font-semibold text-stone-900 mb-2">{branch.name}</h3>
                <p className="text-stone-500 text-sm mb-1 flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {branch.address}
                </p>
                <p className="text-stone-500 text-sm mb-1 flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {branch.phone}
                </p>
                <p className="text-stone-500 text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {branch.hours}
                </p>
              </button>
            ))}
          </div>

          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
            <iframe
              key={selected.id}
              title={`Map for ${selected.name}`}
              src={selected.mapUrl}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-amber-700 tracking-widest text-xs font-semibold uppercase text-center mb-2">
          Reviews
        </p>
        <h2 className="text-4xl font-bold text-center text-stone-900 mb-3"
          style={{ fontFamily: 'Georgia, serif' }}>
          What Guests Say
        </h2>
        <p className="text-stone-500 text-center mb-12 max-w-md mx-auto">
          Honest words from the people who matter most — our guests.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(review => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <Stars count={review.rating} />
              <p className="text-stone-600 text-sm leading-relaxed flex-1">
                "{review.text}"
              </p>
              <div>
                <p className="font-semibold text-stone-900 text-sm">{review.name}</p>
                <p className="text-stone-400 text-xs">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 px-6 text-center text-stone-500 text-sm border-t border-stone-200 bg-white">
      <p className="font-semibold text-stone-900 mb-1" style={{ fontFamily: 'Georgia, serif' }}>
        Bella Tavola
      </p>
      <p>© {new Date().getFullYear()} Bella Tavola. All rights reserved.</p>
    </footer>
  )
}

function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-stone-900/90 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-amber-400 font-bold text-lg" style={{ fontFamily: 'Georgia, serif' }}>
          Bella Tavola
        </span>
        <div className="hidden md:flex items-center gap-6 text-sm text-stone-300">
          {[['#menu', 'Menu'], ['#delivery', 'Delivery'], ['#branches', 'Locations'], ['#reviews', 'Reviews']].map(
            ([href, label]) => (
              <a key={href} href={href} className="hover:text-amber-400 transition-colors">
                {label}
              </a>
            )
          )}
        </div>
        <a
          href="#delivery"
          className="px-5 py-2 rounded-full text-xs font-semibold text-white transition-all hidden md:block"
          style={{ background: '#c8860a' }}
        >
          Order Now
        </a>
      </div>
    </nav>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

function RestaurantHome() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <MenuSection />
        <DeliveryFormSection />
        <BranchesSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  )
}
