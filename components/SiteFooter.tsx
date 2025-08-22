
import Link from 'next/link'

export default function SiteFooter(){
  return (
    <footer className="mt-20 border-t border-zinc-800">
      <div className="container py-10 grid sm:grid-cols-3 gap-8 text-sm text-zinc-400">
        <div>
          <div className="font-semibold text-white">Cahit Oben</div>
          <p className="mt-2">Resmi web sitesi. Tüm hakları saklıdır.</p>
        </div>
        <div>
          <div className="font-semibold text-white">Site</div>
          <ul className="space-y-2 mt-2">
            <li><a href="/sitemap.xml">Site Haritası</a></li>
            <li><Link href="/privacy">Gizlilik</Link></li>
            <li><Link href="/terms">Kullanım Şartları</Link></li>
            <li><Link href="/copyright">Telif Hakları</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Bağlantılar</div>
          <ul className="space-y-2 mt-2">
            <li><a href="https://open.spotify.com/artist/2O8jY0TevDFs7R9tzkh4SH" target="_blank" rel="noreferrer">Spotify</a></li>
            <li><a href="https://music.apple.com/tr/artist/cahit-oben/95145871" target="_blank" rel="noreferrer">Apple Music</a></li>
            <li><a href="https://www.youtube.com/channel/UCWiOnChcc4l8peYF7e0XXfw" target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a href="https://www.instagram.com/cahitobenart/" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-zinc-500 py-6 border-t border-zinc-800">© {new Date().getFullYear()} Cahit Oben</div>
    </footer>
  )
}
