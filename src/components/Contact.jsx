import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('send')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const form = Object.fromEntries(new FormData(e.currentTarget))
      const res = await fetch(`${baseUrl}/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('ok')
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Erzählt uns von eurer Hochzeit</h2>
          <p className="mt-4 text-slate-700">Wir melden uns innerhalb von 24 Stunden mit einem individuellen Angebot.</p>
        </div>

        <form onSubmit={submit} className="mt-12 grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700">Eure Namen</label>
            <input name="names" required className="mt-2 w-full rounded-xl border-slate-300 focus:ring-rose-400 focus:border-rose-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">E-Mail</label>
            <input type="email" name="email" required className="mt-2 w-full rounded-xl border-slate-300 focus:ring-rose-400 focus:border-rose-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Datum der Hochzeit</label>
            <input type="date" name="date" className="mt-2 w-full rounded-xl border-slate-300 focus:ring-rose-400 focus:border-rose-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Ort / Location</label>
            <input name="location" className="mt-2 w-full rounded-xl border-slate-300 focus:ring-rose-400 focus:border-rose-400" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Wünsche & Umfang</label>
            <textarea name="message" rows="5" className="mt-2 w-full rounded-xl border-slate-300 focus:ring-rose-400 focus:border-rose-400" placeholder="Einladungen, Save-the-Date, Menükarten, Sitzplan, ..."></textarea>
          </div>
          <div className="md:col-span-2 flex items-center justify-between gap-4">
            <p className="text-sm text-slate-500">100% unverbindlich • DSGVO-konform • Antwort in 24h</p>
            <button className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 transition">Anfrage senden</button>
          </div>
          {status === 'ok' && <p className="md:col-span-2 text-sm text-emerald-600">Danke! Wir melden uns in Kürze.</p>}
          {status === 'error' && <p className="md:col-span-2 text-sm text-rose-600">Etwas ist schiefgelaufen. Bitte später erneut versuchen.</p>}
        </form>
      </div>
    </section>
  )
}
