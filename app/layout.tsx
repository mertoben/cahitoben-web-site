
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata = {
  title: { default: 'Cahit Oben — Resmi Site', template: '%s — Cahit Oben' },
  description: 'Cahit Oben’in resmi web sitesi: diskografi, haberler, resim çalışmaları.',
  openGraph: {
    title: 'Cahit Oben — Resmi Site',
    description: 'Diskografi, haberler ve resim çalışmaları.',
    images: ['/images/covers/cover1.jpg']
  }
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="tr">
      <body>
        <SiteHeader/>
        {children}
        <SiteFooter/>
      </body>
    </html>
  )
}
