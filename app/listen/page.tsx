import Link from 'next/link'
import { ARTIST_LINKS } from '@/lib/links'
export const metadata = {
  title: 'Dinle — Cahit Oben',
  description: 'Spotify, Apple Music ve YouTube üzerinden dinleyin.',
}

export default function ListenPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Dinle</h1>
      <p className="text-zinc-600 mb-8">
        Resmî dijital platform bağlantıları:
      </p>
      <ul className="grid sm:grid-cols-3 gap-4">
        <li>
          <Link
            href={ARTIST_LINKS.spotify}
            target="_blank"
            className="block rounded-xl border p-5 hover:bg-zinc-50"
          >
            <div className="text-lg font-semibold">Spotify</div>
            <div className="text-sm text-zinc-500">Sanatçı sayfası</div>
          </Link>
        </li>
        <li>
          <Link
            href={ARTIST_LINKS.apple}
            target="_blank"
            className="block rounded-xl border p-5 hover:bg-zinc-50"
          >
            <div className="text-lg font-semibold">Apple Music</div>
            <div className="text-sm text-zinc-500">Sanatçı sayfası</div>
          </Link>
        </li>
        <li>
          <Link
            href={ARTIST_LINKS.youtube}
            target="_blank"
            className="block rounded-xl border p-5 hover:bg-zinc-50"
          >
            <div className="text-lg font-semibold">YouTube</div>
            <div className="text-sm text-zinc-500">Resmî kanal</div>
          </Link>
        </li>
      </ul>
    </main>
  )
}
