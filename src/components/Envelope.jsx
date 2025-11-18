import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Scroll-driven envelope animation revealing an invitation card
export default function Envelope() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const flapRotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, -55, -90])
  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], ['40%', '10%', '-10%'])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.8, 1, 1])
  const shadow = useTransform(scrollYProgress, [0, 1], [0.1, 0.35])

  return (
    <section ref={ref} className="py-28 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Die Einladung, die Herzen öffnet</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Scrollt und erlebt, wie sich der Umschlag öffnet – mit handveredelten Details, feinen Papieren und eurer Geschichte.</p>

        <div className="mt-12 grid place-items-center">
          <div className="relative w-full max-w-xl aspect-[4/3]">
            {/* Envelope base */}
            <div className="absolute inset-0 rounded-2xl bg-white shadow-xl" style={{ boxShadow: `0 30px 60px rgba(2,6,23,${shadow.get?.() || 0.15})` }} />

            {/* Back panel */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-50" />

            {/* Invitation card */}
            <motion.div style={{ y: cardY, opacity: cardOpacity }} className="absolute inset-x-6 top-8 bottom-8 rounded-xl bg-white ring-1 ring-rose-100 overflow-hidden shadow-lg">
              <div className="h-full w-full p-6 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-rose-400">PartyPrints</p>
                <h3 className="mt-3 text-2xl font-serif">Einladung zur Hochzeit</h3>
                <p className="mt-2 text-slate-600">Anna & Jonas</p>
                <p className="text-slate-500">Samstag, 17. Mai 2025 · Botanischer Garten, Berlin</p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-slate-900">Papier</p>
                    <p className="text-slate-600">Baumwolle 600gsm · Soft White</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Veredelung</p>
                    <p className="text-slate-600">Heißfolienprägung · Roségold</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Druck</p>
                    <p className="text-slate-600">Letterpress · Pantone 7611U</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Extras</p>
                    <p className="text-slate-600">Seidenband · Wachssiegel</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Top flap */}
            <motion.div style={{ rotateX: flapRotate }} className="absolute inset-x-0 top-0 h-1/2 origin-top [transform-style:preserve-3d] rounded-t-2xl bg-gradient-to-b from-rose-200 to-rose-100 border-b border-rose-200 shadow">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.6),transparent_70%)]" />
            </motion.div>

            {/* Bottom flap */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-2xl bg-gradient-to-t from-rose-200 to-rose-100 border-t border-rose-200" />

            {/* Liner pattern */}
            <div className="absolute inset-2 rounded-xl pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_90%)]">
              <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
                <defs>
                  <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="#fda4af" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>
          </div>
        </div>

        <p className="mt-10 text-slate-500 text-sm">Tip: Langsam scrollen – die Klappe öffnet sich progressiv und die Karte gleitet heraus.</p>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .reduce-motion-hide { display: none; }
        }
      `}</style>
    </section>
  )
}
