
import Hero from '@/components/Hero'
import Link from 'next/link'
import { ALBUMS } from '@/lib/music'
import { NEWS } from '@/lib/news'
import { ARTWORKS } from '@/lib/art'

export default function Home(){
  return (
    <main>
      <Hero/>
      <section className="container py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Öne Çıkan Albümler</h2>
          <Link href="/discography" className="text-sm text-zinc-400 hover:text-white">Tümü</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
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

      <section className="container py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Haberler</h2>
          <Link href="/news" className="text-sm text-zinc-400 hover:text-white">Tümü</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          {NEWS.map(n => (
            <Link key={n.slug} href={`/news/${n.slug}`} className="block border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600">
              <img src={n.image || '/images/news/sergi.jpg'} alt={n.title} className="w-full aspect-video object-cover"/>
              <div className="p-3">
                <div className="font-semibold">{n.title}</div>
                <div className="text-xs text-zinc-500">{new Date(n.date).toLocaleDateString('tr-TR')}</div>
                <p className="text-sm mt-1 text-zinc-300">{n.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Resim Çalışmaları</h2>
          <Link href="/art" className="text-sm text-zinc-400 hover:text-white">Tümü</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {ARTWORKS.map(w => (
            <Link key={w.id} href={`/art/${w.id}`} className="block border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600">
              <img src={w.image} alt={w.title} className="w-full aspect-square object-cover"/>
              <div className="p-3">
                <div className="font-semibold">{w.title}</div>
                {w.series && <div className="text-xs text-zinc-500 mt-1">{w.series}</div>}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
