
import Link from 'next/link'
import { ARTWORKS } from '@/lib/art'

export const metadata = { title:'Resim Çalışmaları' }

export default function Art(){
  return (
    <section className="container py-10">
      <h1 className="text-2xl font-semibold mb-6">Resim Çalışmaları</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ARTWORKS.map(w => (
          <Link key={w.id} href={`/art/${w.id}`} className="block border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600">
            <img src={w.image} alt={w.title} className="w-full aspect-square object-cover"/>
            <div className="p-3">
              <div className="font-semibold">{w.title}</div>
              {w.series && <div className="text-xs text-zinc-500 mt-1">{w.series}</div>}
              {w.description && <p className="text-sm mt-2 text-zinc-300">{w.description}</p>}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
