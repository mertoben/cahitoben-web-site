import Link from 'next/link'

export const metadata = {
  title: 'Haberler — Cahit Oben',
  description: 'Basında yer alan haberler ve duyurular.',
}

async function getGoogleNews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ''}/api/news/google`, {
    // Production’da domain gerekir; dev’de relative de olabilir.
    // Güvenli yaklaşım: mutlak URL. NEXT_PUBLIC_SITE_URL .env’de olmalı.
    next: { revalidate: 3600 },
    cache: 'force-cache',
  }).catch(() => null)

  if (!res || !res.ok) return []
  const data = await res.json().catch(() => null)
  return data?.items ?? []
}

export default async function NewsPage() {
  const items = await getGoogleNews()

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Haberler</h1>

      <div className="mb-6 text-sm text-zinc-600">
        Kaynak: Google News (otomatik). Son 1 saatlik önbellekleme uygulanır.
      </div>

      {!items.length ? (
        <div className="text-zinc-500">Şu anda haber bulunamadı.</div>
      ) : (
        <ul className="space-y-4">
          {items.map((it: any, i: number) => (
            <li key={i} className="border rounded-xl p-4 hover:bg-zinc-50">
              <Link href={it.link} target="_blank" className="block">
                <div className="text-lg font-semibold">{it.title}</div>
                {it.description && (
                  <p className="text-sm text-zinc-600 mt-1">{it.description}</p>
                )}
                <div className="text-xs text-zinc-500 mt-2">
                  {it.source ? `${it.source} • ` : ''}{new Date(it.pubDate).toLocaleString('tr-TR')}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
