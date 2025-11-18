import { useMemo } from 'react'

export default function Awards() {
  const logos = useMemo(() => [
    { name: 'Awwwards', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Awwwards_Logo.svg/512px-Awwwards_Logo.svg.png' },
    { name: 'The FWA', url: 'https://seeklogo.com/images/F/fwa-logo-6E5CB5B6A9-seeklogo.com.png' },
    { name: 'Behance', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Behance_logo.svg' },
    { name: 'Adobe', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Adobe_Systems_logo_and_wordmark.svg' },
    { name: 'Dribbble', url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Dribbble_text_logo.png' },
  ], [])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-slate-500">Gesehen in</p>
      </div>
      <div className="mt-6 overflow-hidden">
        <div className="flex gap-16 animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] items-center opacity-70">
          {logos.concat(logos).concat(logos).map((l, i) => (
            <img key={i} src={l.url} alt={l.name} className="h-8 w-auto object-contain"/>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  )
}
