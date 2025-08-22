import Link from 'next/link'
import { ARTIST_LINKS } from '@/lib/links'
export const metadata = {
  title: 'Dinle — Cahit Oben',
  description: 'Spotify, Apple Music ve YouTube üzerinden dinleyin.',
}
export default function ListenPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Cahit Oben – Dinle</h1>
      <ul className="space-y-4">
        <li>
          <a
            href="https://open.spotify.com/intl-tr/artist/2O8jY0TevDFs7R9tzkh4SH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Spotify’da Dinle
          </a>
        </li>
        <li>
          <a
            href="https://music.apple.com/tr/artist/cahit-oben/95145871"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Apple Music’te Dinle
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCWiOnChcc4l8peYF7e0XXfw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            YouTube Kanalı
          </a>
        </li>
      </ul>
    </main>
  )
}
