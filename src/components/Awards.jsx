import { motion } from 'framer-motion'
import { Gauge, Accessibility, Sparkles, ShieldCheck, SearchCheck } from 'lucide-react'

export default function Awards() {
  const badges = [
    {
      title: 'Performance',
      desc: '95+ Lighthouse on modern mobile',
      Icon: Gauge,
      color: 'from-emerald-500/20 to-emerald-500/5',
    },
    {
      title: 'Accessibility',
      desc: 'WCAG 2.2 AA targets by default',
      Icon: Accessibility,
      color: 'from-indigo-500/20 to-indigo-500/5',
    },
    {
      title: 'Motion',
      desc: 'Respects reduced‑motion preferences',
      Icon: Sparkles,
      color: 'from-pink-500/20 to-pink-500/5',
    },
    {
      title: 'Craft',
      desc: 'Pixel‑perfect layouts & typography',
      Icon: ShieldCheck,
      color: 'from-amber-500/20 to-amber-500/5',
    },
    {
      title: 'SEO',
      desc: 'OG tags & structured data ready',
      Icon: SearchCheck,
      color: 'from-sky-500/20 to-sky-500/5',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-sm tracking-wide text-slate-500">Unsere Standards</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Gebaut, um Jurys zu begeistern — ehrlich kommuniziert</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Wir machen keine falschen Claims. Stattdessen liefern wir messbare Qualität in Performance, Zugänglichkeit, und Detailtreue — die Grundlage für echte Auszeichnungen.</p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
          }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {badges.map(({ title, desc, Icon, color }, i) => (
            <motion.li
              key={i}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              className="relative rounded-xl border border-slate-200 bg-gradient-to-b p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{
                backgroundImage: `linear-gradient(to bottom, var(--tw-gradient-from), var(--tw-gradient-to))`,
              }}
            >
              <div className={`pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br ${color}`} aria-hidden="true" />
              <div className="relative flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 border border-slate-200 shadow-sm">
                  <Icon className="h-5 w-5 text-slate-900" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-medium text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600 mt-0.5">{desc}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-8 text-center text-xs text-slate-500">Kein Award gewonnen — noch. Wir setzen auf Substanz und reichen erst ein, wenn alles stimmt.</p>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  )
}
