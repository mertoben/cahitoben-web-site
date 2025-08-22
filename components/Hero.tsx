
import Link from 'next/link'

export default function Hero(){
  return (
    <section className="relative overflow-hidden border-b border-zinc-800">
      <div className="container py-16 md:py-24 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
          Arşivden <span className="text-pink-400">yeniden</span> doğan ses
        </h1>
        <p className="mt-4 text-zinc-300 max-w-2xl">
          Cahit Oben’in nadir kayıtları ve resim çalışmaları tek çatıda. Dinle, keşfet, oku.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/discography" className="px-4 py-2 rounded-full bg-pink-500 text-white">Diskografi</Link>
          <Link href="/art" className="px-4 py-2 rounded-full border border-zinc-700">Resim Çalışmaları</Link>
        </div>
      </div>
    </section>
  )
}
