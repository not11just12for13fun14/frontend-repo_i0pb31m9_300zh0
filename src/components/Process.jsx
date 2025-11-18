export default function Process() {
  const steps = [
    { no: '01', title: 'Kennenlernen', text: 'Wir sprechen über eure Vorstellungen, Mood & Budget.' },
    { no: '02', title: 'Entwurf', text: 'Wir gestalten euer individuelles Design und senden Muster zu.' },
    { no: '03', title: 'Feinschliff', text: 'Anpassungen bis alles perfekt ist. Material & Veredelung wählen.' },
    { no: '04', title: 'Produktion', text: 'Druck, Veredelung, Konfektion. Pünktliche Lieferung zu euch.' },
  ]

  return (
    <section id="ablauf" className="py-24 bg-gradient-to-b from-white to-rose-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">So arbeiten wir zusammen</h2>
          <p className="mt-4 text-slate-700">Ein transparenter, entspannter Prozess – mit Fokus auf Qualität und Persönlichkeit.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.no} className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 shadow-sm">
              <p className="text-xs font-mono text-slate-500">{s.no}</p>
              <h3 className="mt-2 font-medium text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
