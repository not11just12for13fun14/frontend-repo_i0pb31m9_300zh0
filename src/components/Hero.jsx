export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-rose-300/40 to-fuchsia-300/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-amber-200/40 to-rose-200/40 blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Zeitlose Papeterie für eure einzigartige Liebesgeschichte
            </h1>
            <p className="mt-6 text-lg text-slate-700">
              Handgefertigte Einladungen, Menükarten, Sitzpläne und mehr — individuell gestaltet für euren großen Tag. Nachhaltige Materialien, feine Veredelungen, volle Liebe zum Detail.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#kontakt" className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 transition">
                Individuelles Angebot
              </a>
              <a href="#kollektion" className="inline-flex items-center rounded-full bg-white ring-1 ring-slate-300 text-slate-900 px-6 py-3 text-sm hover:bg-slate-50">
                Kollektion ansehen
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <img key={i} className="h-8 w-8 rounded-full ring-2 ring-white" src={`https://i.pravatar.cc/80?img=${i}`} alt="Kunde" />
                ))}
              </div>
              <p>Über 500 glückliche Paare • 4.9/5 Zufriedenheit</p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-300/50 to-fuchsia-300/50 blur-xl rounded-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2730&auto=format&fit=crop" alt="Wedding Stationery" className="w-full h-[28rem] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 ring-1 ring-slate-200">
                <p className="text-sm font-medium text-slate-800">Feine Papiere • Goldfolienprägung • Letterpress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
