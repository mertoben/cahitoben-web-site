
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/about', label: 'Hakkında' },
  { href: '/discography', label: 'Diskografi' },
  { href: '/news', label: 'Haberler' },
  { href: '/art', label: 'Resim Çalışmaları' },
  { href: '/listen', label: 'Dinle' },
  { href: '/contact', label: 'İletişim' },
]

export default function SiteHeader(){
  const path = usePathname()
  return (
    <header className="border-b border-zinc-800 sticky top-0 z-50 backdrop-blur bg-black/50">
      <div className="container flex items-center justify-between h-14">
        <Link href="/" className="font-semibold tracking-wide">CAHİT&nbsp;OBEN</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {items.map(i => (
            <Link key={i.href} href={i.href} className={path===i.href ? 'text-pink-400' : 'text-zinc-300 hover:text-white'}>
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
