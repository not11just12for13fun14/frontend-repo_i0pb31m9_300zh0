import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, sub, align = 'center' }) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm tracking-wide text-slate-500"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900"
      >
        <span className="foil-text inline-block">
          {title}
        </span>
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-slate-600 max-w-2xl mx-auto"
        >
          {sub}
        </motion.p>
      )}
    </div>
  )
}
