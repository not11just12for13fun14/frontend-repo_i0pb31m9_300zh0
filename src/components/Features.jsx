export default function Features() {
  const features = [
    {
      title: 'Individuelles Design',
      text: 'Jedes Set wird exklusiv für euch gestaltet – passend zu Location, Farbwelt und Stil.',
      img: 'https://images.unsplash.com/photo-1519680772-8b2b2e3c5d84?q=80&w=2748&auto=format&fit=crop'
    },
    {
      title: 'Nachhaltige Materialien',
      text: 'Recycling- und Baumwollpapiere, klimaneutraler Druck und lokale Produktion.',
      img: 'https://images.unsplash.com/photo-1520975922321-6ca0a6a2a8da?q=80&w=2732&auto=format&fit=crop'
    },
    {
      title: 'Veredelungen',
      text: 'Gold- & Kupferfolien, Blindprägung, Letterpress, Farbschnitt – echte Hingucker.',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2760&auto=format&fit=crop'
    },
  ]

  return (
    <section id="kollektion" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Kollektion & Möglichkeiten</h2>
          <p className="mt-4 text-slate-700">Von Save-the-Date bis Dankeskarten: Alles aus einem Guss. Ihr wählt, wir veredeln.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 shadow-lg">
              <img src={f.img} alt={f.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-6">
                <h3 className="font-medium text-lg text-slate-900">{f.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
