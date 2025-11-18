import { useState, useMemo } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import Lightbox from './Lightbox'

const categories = [
  { key: 'all', label: 'Alle' },
  { key: 'save', label: 'Save‑the‑Date' },
  { key: 'invite', label: 'Einladungen' },
  { key: 'menu', label: 'Menükarten' },
  { key: 'seating', label: 'Sitzpläne' },
]

const raw = [
  { id: 1, cat: 'invite', src: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop', title: 'Foil Invitation' },
  { id: 2, cat: 'save', src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop', title: 'Date Card' },
  { id: 3, cat: 'menu', src: 'https://images.unsplash.com/photo-1565357254165-dd9710e26f82?&w=1600&auto=format&fit=crop&q=80', title: 'Menu Card' },
  { id: 4, cat: 'seating', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&auto=format&fit=crop&q=80', title: 'Seating Plan' },
  { id: 5, cat: 'invite', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&auto=format&fit=crop&q=80', title: 'Letterpress' },
  { id: 6, cat: 'menu', src: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1600&auto=format&fit=crop&q=80', title: 'Menus' },
]

export default function Gallery() {
  const [active, setActive] = useState('all')
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const items = useMemo(() => raw.map((r, i) => ({ ...r, idx: i })), [])
  const filtered = active === 'all' ? items : items.filter(i => i.cat === active)

  const openAt = (idx) => {
    const fullIndex = items.findIndex(it => it.id === filtered[idx].id)
    setIndex(fullIndex)
    setOpen(true)
  }

  const current = items[index]
  const next = () => setIndex((i) => (i + 1) % items.length)
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)

  return (
    <section id="kollektion" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Kollektion & Galerie</h2>
            <p className="mt-4 text-slate-700">Filtert nach Kategorie, öffnet Bilder im Lightbox und entdeckt feine Details.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c.key} onClick={() => setActive(c.key)} className={`rounded-full px-4 py-2 text-sm transition ${active===c.key? 'bg-slate-900 text-white' : 'bg-white ring-1 ring-slate-300 text-slate-900 hover:bg-slate-50'}`}>
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <LayoutGroup>
          <motion.div layout className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((it, i) => (
                <motion.figure key={it.id} layout initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration:0.4}} className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 shadow-lg cursor-zoom-in" onClick={() => openAt(i)}>
                  <motion.img layoutId={`img-${it.id}`} src={it.src} alt={it.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"/>
                  <figcaption className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4 text-white">
                    <div>
                      <p className="text-sm/5 tracking-wide uppercase">{it.title}</p>
                      <span className="mt-2 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur hover:bg-white/20">Details ansehen</span>
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      <Lightbox open={open} item={current} onClose={() => setOpen(false)} onPrev={prev} onNext={next} />
    </section>
  )
}
