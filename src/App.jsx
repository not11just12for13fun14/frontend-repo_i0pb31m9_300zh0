import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Process />
        <Testimonials />
        <Contact />
        <footer className="py-16 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} PartyPrints – Individuelle Hochzeitspapeterie</p>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900">Impressum</a>
              <a href="#" className="hover:text-slate-900">Datenschutz</a>
              <a href="#kontakt" className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm">Anfrage</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
