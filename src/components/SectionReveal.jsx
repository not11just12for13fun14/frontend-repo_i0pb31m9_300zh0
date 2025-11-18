import { motion } from 'framer-motion'

export default function SectionReveal({ as: Tag = 'section', className = '', children, delay = 0 }) {
  const variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  }
  return (
    <motion.section
      as={Tag}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  )
}
