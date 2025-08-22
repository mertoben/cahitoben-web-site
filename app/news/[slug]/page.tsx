
import { NEWS } from '@/lib/news'

export function generateStaticParams(){ return NEWS.map(n => ({ slug:n.slug })) }

export async function generateMetadata({ params }:{ params:{ slug:string }}){
  const n = NEWS.find(x => x.slug === params.slug)
  return { title: n ? `${n.title} — Haber` : 'Haber' }
}

export default function NewsDetail({ params }:{ params:{ slug:string }}){
  const n = NEWS.find(x => x.slug === params.slug)
  if(!n) return <div className="container py-10">Bulunamadı</div>
  return (
    <section className="container py-10 prose prose-invert">
      <h1>{n.title}</h1>
      <p><small>{new Date(n.date).toLocaleDateString('tr-TR')}</small></p>
      {n.image && <img src={n.image} alt={n.title} />}
      <p>{n.body || n.excerpt}</p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"NewsArticle",
        "headline": n.title,
        "datePublished": n.date,
        "image": n.image ? [n.image] : undefined
      })}} />
    </section>
  )
}
