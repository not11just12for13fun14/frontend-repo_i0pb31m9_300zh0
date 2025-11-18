export default function Testimonials() {
  const quotes = [
    {
      text: 'Wir haben so viele Komplimente für unsere Einladungen bekommen – einfach traumhaft! Die Beratung war herzlich und professionell.',
      name: 'Sophie & Lukas',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2574&auto=format&fit=crop'
    },
    {
      text: 'Die Qualität und die kleinen Details sind unglaublich. Genau unser Stil, mit Liebe gemacht.',
      name: 'Mara & Tim',
      img: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=2574&auto=format&fit=crop'
    },
    {
      text: 'Toller Service von A bis Z. Unser Sitzplan und die Menükarten waren das i-Tüpfelchen!',
      name: 'Lea & Paul',
      img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2574&auto=format&fit=crop'
    },
  ]

  return (
    <section id="stimmen" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Stimmen glücklicher Paare</h2>
          <p className="mt-4 text-slate-700">Echte Erfahrungen – echte Emotionen.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <img src={q.img} alt={q.name} className="h-10 w-10 rounded-full object-cover"/>
                <figcaption className="text-sm font-medium text-slate-900">{q.name}</figcaption>
              </div>
              <blockquote className="mt-4 text-slate-700 text-sm">“{q.text}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
