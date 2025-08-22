
import { ARTWORKS } from '@/lib/art'

export function generateStaticParams(){ return ARTWORKS.map(a => ({ id:a.id })) }

export async function generateMetadata({ params }:{ params:{ id:string }}){
  const a = ARTWORKS.find(x => x.id === params.id)
  return { title: a ? `${a.title} — Resim` : 'Resim', description: a?.series || '' }
}

export default function ArtworkPage({ params }:{ params:{ id:string }}){
  const a = ARTWORKS.find(x => x.id === params.id)
  if(!a) return <div className="container py-10">Bulunamadı</div>
  const similar = ARTWORKS.filter(x => x.id !== a.id && x.series && x.series === a.series)

  return (
    <section className="container py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={a.image} alt={a.title} className="w-full rounded-lg border border-zinc-800"/>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{a.title}</h1>
          {(a.year || a.series) && <div className="text-sm text-zinc-500 mt-1">{[a.year, a.series].filter(Boolean).join(' • ')}</div>}
          {a.description && <p className="mt-4">{a.description}</p>}

          {a.instagramUrl && (
            <div className="mt-6">
              <div className="text-xs text-zinc-400 mb-1">Instagram gönderisi</div>
              <blockquote className="instagram-media" data-instgrm-permalink={a.instagramUrl} data-instgrm-version="14"></blockquote>
              <script async src="//www.instagram.com/embed.js"></script>
            </div>
          )}

          {similar.length>0 && (
            <div className="mt-8">
              <h2 className="font-semibold mb-2">Benzer eserler</h2>
              <div className="grid grid-cols-3 gap-3">
                {similar.map(s => (
                  <a key={s.id} href={`/art/${s.id}`} className="block border border-zinc-800 rounded overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full aspect-square object-cover"/>
                  </a>
                ))}
              </div>
            </div>
          )}

          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"CreativeWork",
            "name": a.title,
            "dateCreated": a.year ? `${a.year}-01-01` : undefined,
            "genre": a.series
          })}} />
        </div>
      </div>
    </section>
  )
}
