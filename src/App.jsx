import Nav from './components/Nav'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Craft from './components/Craft'
import ParallaxDivider from './components/ParallaxDivider'
import Faq from './components/Faq'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Awards from './components/Awards'
import Envelope from './components/Envelope'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <Awards />
        <Gallery />
        <Envelope />
        <Craft />
        <ParallaxDivider />
        <Testimonials />
        <Faq />
        <Contact />
        <footer className="py-16 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} PartyPrints – Individuelle Hochzeitspapeterie</p>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900">Impressum</a>
              <a href="#" className="hover:text-slate-900">Datenschutz</a>
              <a href="#kontakt" className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm hover:-translate-y-0.5 transition">Anfrage</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
