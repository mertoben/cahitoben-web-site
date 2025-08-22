
import Link from 'next/link'
import { ALBUMS } from '@/lib/music'
export const metadata = { title:'Diskografi' }

export default function Discography(){
  return (
    <section className="container py-10">
      <h1 className="text-2xl font-semibold mb-6">Diskografi</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ALBUMS.map(a => (
          <Link key={a.id} href={`/discography/${a.id}`} className="block border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600">
            <img src={a.cover || '/images/covers/cover1.jpg'} alt={a.title} className="w-full aspect-square object-cover"/>
            <div className="p-3">
              <div className="font-semibold">{a.title}</div>
              <div className="text-xs text-zinc-500">{a.year}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
