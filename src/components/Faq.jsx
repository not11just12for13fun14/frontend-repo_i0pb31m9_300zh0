import { useState } from 'react'

const faqs = [
  { q: 'Wie lange dauert der gesamte Prozess?', a: 'In der Regel 3–6 Wochen je nach Umfang, Veredelungen und Korrekturschleifen. Express auf Anfrage.' },
  { q: 'Bietet ihr internationale Lieferung an?', a: 'Ja, wir versenden europaweit klimaneutral. Abholung in Berlin ist ebenfalls möglich.' },
  { q: 'Können wir Muster erhalten?', a: 'Gern senden wir Materialproben und Druckmuster zu, damit ihr Qualität und Haptik erleben könnt.' },
  { q: 'Mit welchen Budgets arbeitet ihr?', a: 'Individuell – typische Projekte liegen zwischen 800€ und 3.500€. Wir beraten transparent.' },
]

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50/40">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center">Häufige Fragen</h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((f, idx) => (
            <details key={idx} open={open === idx} onClick={(e) => { e.preventDefault(); setOpen(open === idx ? null : idx) }} className="group">
              <summary className="flex cursor-pointer items-center justify-between p-6 list-none">
                <span className="font-medium text-slate-900">{f.q}</span>
                <span className="ml-6 h-6 w-6 rounded-full grid place-items-center bg-slate-100 text-slate-700 transition group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700 -mt-2">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
