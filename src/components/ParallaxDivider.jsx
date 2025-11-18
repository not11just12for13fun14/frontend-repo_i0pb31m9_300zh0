import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxDivider() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0,1], [40, -40])
  const y2 = useTransform(scrollYProgress, [0,1], [-20, 20])

  return (
    <section ref={ref} className="relative h-[320px] overflow-hidden">
      <img src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2760&auto=format&fit=crop" alt="Texture" className="absolute inset-0 h-full w-full object-cover opacity-40"/>
      <motion.div style={{ y: y1 }} className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-rose-200/60 blur-2xl"/>
      <motion.div style={{ y: y2 }} className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-amber-200/60 blur-2xl"/>
      <div className="relative h-full grid place-items-center">
        <p className="text-center text-xl md:text-2xl font-medium text-slate-800">Feine Papiere. Zeitlose Gestaltung. Liebe zum Detail.</p>
      </div>
    </section>
  )
}
