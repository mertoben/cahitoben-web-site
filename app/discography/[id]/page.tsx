
import { ALBUMS } from '@/lib/music'

export function generateStaticParams(){ return ALBUMS.map(a => ({ id:a.id })) }

export async function generateMetadata({ params }:{ params:{ id:string }}){
  const a = ALBUMS.find(x => x.id === params.id)
  return { title: a ? `${a.title} — Albüm` : 'Albüm' }
}

export default function AlbumPage({ params }:{ params:{ id:string }}){
  const a = ALBUMS.find(x => x.id === params.id)
  if(!a) return <div className="container py-10">Bulunamadı</div>
  return (
    <section className="container py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={a.cover || '/images/covers/cover1.jpg'} alt={a.title} className="w-full rounded-lg border border-zinc-800"/>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{a.title}</h1>
          <div className="text-sm text-zinc-500 mt-1">{a.year}</div>
          {a.description && <p className="mt-4">{a.description}</p>}
          <h2 className="mt-6 font-semibold">Parçalar</h2>
          <ol className="mt-2 space-y-1 list-decimal list-inside">
            {a.tracks.map((t,i) => <li key={t.id}>{t.title}</li>)}
          </ol>
          <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"MusicAlbum",
            "name": a.title,
            "datePublished": `${a.year}-01-01`,
            "track": a.tracks.map((t,i)=>({ "@type":"MusicRecording", "name": t.title, "position": i+1 }))
          })}} />
        </div>
      </div>
    </section>
  )
}
