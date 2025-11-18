import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Craft() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8])
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} id="individuell" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Handwerk & Veredelung</h2>
          <p className="mt-4 text-slate-700">Letterpress, Heißfolienprägung, Farbschnitt – wir kombinieren traditionelle Techniken mit modernem Design. Beim Scrollen erwacht die Komposition zum Leben.</p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• Baumwoll- & Recyclingpapiere</li>
            <li>• Gold, Kupfer, Roségold</li>
            <li>• Kantenfärbung & Stanzungen</li>
          </ul>
        </div>
        <div className="relative h-[26rem]">
          <motion.div style={{ rotate }} className="absolute inset-0 grid place-items-center">
            <div className="relative">
              <motion.div style={{ y }} className="absolute -top-6 -left-6 h-28 w-40 rounded-2xl bg-amber-100 rotate-[-6deg] shadow-xl"/>
              <motion.div style={{ y }} className="absolute -bottom-8 -right-8 h-28 w-40 rounded-2xl bg-rose-100 rotate-[8deg] shadow-xl"/>
              <div className="relative h-72 w-56 rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1436918898788-ebce04d38e46?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMZXR0ZXJwcmVzc3xlbnwwfDB8fHwxNzYzNDYwMDUxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Letterpress" className="h-full w-full object-cover"/>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
