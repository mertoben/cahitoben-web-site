// components/SiteHeader.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Route } from 'next'   // ← önemli

const items: Array<{ href: Route; label: string }> = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/about', label: 'Hakkında' },
  { href: '/discography', label: 'Diskografi' },
  { href: '/news', label: 'Haberler' },
  { href: '/art', label: 'Resim Çalışmaları' },
  { href: '/listen', label: 'Dinle' },
  { href: '/contact', label: 'İletişim' },
]

export default function SiteHeader() {
  const path = usePathname()

  return (
    <header className="...">
      <nav className="hidden md:flex gap-6 text-sm">
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}                          // ← i.href artık Route tipi
            className={path === i.href ? 'text-pink-400' : 'text-zinc-300 hover:text-white'}
          >
            {i.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
