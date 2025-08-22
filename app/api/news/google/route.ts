import { NextResponse } from 'next/server'
import { XMLParser } from 'fast-xml-parser'

export const revalidate = 3600 // 1 saat cache (ISR benzeri)

const FEED =
  'https://news.google.com/rss/search?q=Cahit+Oben&hl=tr&gl=TR&ceid=TR:tr'

export async function GET() {
  try {
    const res = await fetch(FEED, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    if (!res.ok) {
      return NextResponse.json({ items: [], error: 'feed_error' }, { status: 200 })
    }
    const xml = await res.text()
    const parser = new XMLParser({ ignoreAttributes: false })
    const data = parser.parse(xml) as any

    const items = (data?.rss?.channel?.item ?? []).map((it: any) => ({
      title: it?.title || '',
      link: (it?.link || '').replace(/^https?:\/\/news\.google\.com\/__i\/rss\/rd\//, ''),
      pubDate: it?.pubDate || '',
      source: it?.source?.['#text'] || it?.source || '',
      // kısa alıntı (varsa)
      description: (it?.description || '')
        .replace(/<[^>]+>/g, '')
        .slice(0, 220),
    }))

    return NextResponse.json({ items }, { status: 200 })
  } catch (e) {
    return NextResponse.json({ items: [], error: 'parse_error' }, { status: 200 })
  }
}
