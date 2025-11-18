import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Lightbox({ open, item, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev?.()
      if (e.key === 'ArrowRight') onNext?.()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
        >
          <button
            onClick={onClose}
            aria-label="Schließen"
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute inset-0 grid place-items-center p-6">
            <div className="relative max-w-5xl w-full">
              <motion.img
                key={item?.id}
                src={item?.src}
                alt={item?.title || 'Bild'}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              />
              {item?.title && (
                <div className="mt-4 text-center text-white/90">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
                <button
                  onClick={onPrev}
                  className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={onNext}
                  className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
