
import Link from 'next/link'
import { NEWS } from '@/lib/news'

export const metadata = { title:'Haberler' }

export default function News(){
  return (
    <section className="container py-10">
      <h1 className="text-2xl font-semibold mb-6">Haberler</h1>
      <div className="grid md:grid-cols-2 gap-6">
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
  )
}
