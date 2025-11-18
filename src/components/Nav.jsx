import { useState, useEffect } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [
    { href: '#kollektion', label: 'Kollektion' },
    { href: '#individuell', label: 'Individuell' },
    { href: '#ablauf', label: 'Ablauf' },
    { href: '#stimmen', label: 'Stimmen' },
  ]

  return (
    <header className={classNames(
      'fixed top-0 left-0 right-0 z-50 transition-all',
      scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm' : 'bg-transparent'
    )}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-fuchsia-500 shadow-lg shadow-fuchsia-500/20">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
              <path d="M12 3c-2.5 3.5-2.5 6.5 0 9 2.5-2.5 2.5-5.5 0-9Z" fill="currentColor"/>
              <path d="M7 10c-2.2 2.8-2.2 5.2 0 7.2 2.2-2 2.2-4.4 0-7.2Z" fill="currentColor" opacity=".6"/>
              <path d="M17 10c2.2 2.8 2.2 5.2 0 7.2-2.2-2-2.2-4.4 0-7.2Z" fill="currentColor" opacity=".6"/>
            </svg>
          </span>
          <div className="leading-tight">
            <p className="font-semibold text-slate-900">PartyPrints</p>
            <p className="text-xs text-slate-500">Wedding Atelier</p>
          </div>
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg p-2 hover:bg-slate-100" aria-label="Menü">
          <svg width="24" height="24" fill="none" stroke="currentColor" className="text-slate-800"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
              {it.label}
            </a>
          ))}
          <a href="#kontakt" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white text-sm px-4 py-2 hover:-translate-y-0.5 transition transform shadow-lg shadow-slate-900/20">
            Angebot anfragen
          </a>
        </div>
      </nav>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white/80 backdrop-blur">
          {items.map((it) => (
            <a key={it.href} href={it.href} onClick={() => setOpen(false)} className="block text-slate-800 py-2">
              {it.label}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setOpen(false)} className="block bg-slate-900 text-white text-center rounded-full px-4 py-2">Angebot anfragen</a>
        </div>
      )}
    </header>
  )
}
