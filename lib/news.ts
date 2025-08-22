
export type NewsItem = { slug:string; title:string; date:string; excerpt:string; image?:string; body?:string }
export const NEWS: NewsItem[] = [
  { slug:'arsiv-kayitlari-dijitalde', title:'Arşiv Kayıtları Dijitalde', date:'2025-08-01', excerpt:"Nadir 45'liklerden seçkiler dijital platformlarda tekrar dinleyiciyle buluşuyor.", image:'/images/news/arsiv.jpg', body:'Seçkide 1965-1978 arası kayıtlardan remaster edilmiş eserler yer alıyor.' },
  { slug:'resim-secisi-yayinda', title:'Resim Seçkisi Yayında', date:'2025-07-01', excerpt:'Soyut seri ve peyzajlardan oluşan çevrimiçi seçki erişime açıldı.', image:'/images/news/sergi.jpg', body:'Seçkide dijital arşivden 12 iş bulunuyor.' }
]
