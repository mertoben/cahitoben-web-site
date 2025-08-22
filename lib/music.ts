// lib/music.ts
export type Track = {
  id: string;
  title: string;
  duration?: string;        // ISO 8601 süre "PT2M45S" gibi (isteğe bağlı)
  spotify?: string;
  apple?: string;
  youtube?: string;
};

export type Release = {
  id: string;
  slug: string;
  title: string;
  year: number;
  type: 'single' | 'ep' | 'lp' | 'compilation';
  label?: string;
  catno?: string;           // katalo k no (varsa)
  cover: string;            // /images/covers/*.jpg
  description?: string;
  tracks: Track[];
  external?: {
    spotify?: string;
    apple?: string;
    discogs?: string;
    youtube?: string;
  };
  // JSON-LD için
  schema?: {
    isrcs?: Record<string, string>;
    upc?: string;
  };
};

// Not: Kapak görsellerini /public/images/covers altına koy.
// İsimleri burada kullandığım dosya adlarıyla eşleşsin.

export const ALBUMS: Release[] = [
  {
    id: '1965-makaram-sari-baglar',
    slug: 'makaram-sari-baglar-halime',
    title: "Makaram Sarı Bağlar / Halime",
    year: 1965,
    type: 'single',
    label: 'Hürriyet Altın Mikrofon',
    cover: '/images/covers/1965-makaram-sari-baglar.jpg',
    description:
      "Cahit Oben 4’lü’sü dönemi; Altın Mikrofon yarışması kaydı olarak bilinir. A yüzü halk ezgisi düzenlemesi, B yüzü “Halime”.",
    tracks: [
      { id: 'a1', title: 'Makaram Sarı Bağlar' },
      { id: 'b1', title: 'Halime' },
    ],
    external: {
      wikipedia: undefined,
      discogs: 'https://www.discogs.com/artist/7381103-Cahit-Oben-D%C3%B6rtl%C3%BCs%C3%BC',
      youtube: 'https://www.youtube.com/results?search_query=cahit+oben+makaram+sari+ba%C4%9Flar',
    },
  },
  {
    id: '1965-silifkenin-yogurdu',
    slug: 'silifkenin-yogurdu-hereke',
    title: "Silifke’nin Yoğurdu / Hereke",
    year: 1965,
    type: 'single',
    label: 'Grafson (tahmini)',
    cover: '/images/covers/1965-silifkenin-yogurdu.jpg',
    description:
      "A yüzü anonim halk ezgisi “Silifke’nin Yoğurdu”, B yüzü Fikret Kızılok’un ilk bestesi “Hereke”.",
    tracks: [
      { id: 'a1', title: "Silifke’nin Yoğurdu" },
      { id: 'b1', title: 'Hereke' },
    ],
    external: {
      wikipedia: undefined,
      discogs: 'https://www.discogs.com/artist/730124-Cahit-Oben',
      youtube: 'https://www.youtube.com/results?search_query=cahit+oben+silifkenin+yo%C4%9Furdu',
      spotify: 'https://open.spotify.com/artist/2O8jY0TevDFs7R9tzkh4SH',
    },
  },
  {
    id: '1966-ala-gozlerini',
    slug: 'ala-gozlerini-sevdigim-dilber-surmeli-gelin',
    title: "Ala Gözlerini Sevdiğim Dilber / Sürmeli Gelin",
    year: 1966,
    type: 'single',
    label: 'Grafson (tahmini)',
    cover: '/images/covers/1966-ala-gozlerini.jpg',
    tracks: [
      { id: 'a1', title: "Ala Gözlerini Sevdiğim Dilber" },
      { id: 'b1', title: 'Sürmeli Gelin' },
    ],
    external: {
      discogs: 'https://www.discogs.com/artist/730124-Cahit-Oben',
      qobuz: 'https://www.qobuz.com/ca-en/interpreter/cahit-oben/1210390',
    },
  },
  {
    id: '1966-geli-geliver-bana',
    slug: 'geli-geliver-bana',
    title: 'Geli Geliver Bana',
    year: 1966,
    type: 'single',
    label: '—',
    cover: '/images/covers/1966-geli-geliver-bana.jpg',
    tracks: [{ id: 'a1', title: 'Geli Geliver Bana' }],
    external: {
      spotify: 'https://open.spotify.com/track/5taclx5zlwdt5ngBIX3UeV',
    },
  },
  {
    id: '1973-karakoyun',
    slug: 'karakoyun',
    title: 'Karakoyun',
    year: 1973,
    type: 'single',
    label: 'Odeon',
    catno: 'Odeon – (TR, 45’lik)',
    cover: '/images/covers/1973-karakoyun.jpg',
    description:
      '“Karakoyun” ve enstrümantal versiyonu; dönemin en bilinen 45’liklerinden.',
    tracks: [
      { id: 'a1', title: 'Karakoyun' },
      { id: 'b1', title: 'Karakoyun (Enstrümantal)' },
    ],
    external: {
      discogs: 'https://www.discogs.com/release/8870932-Cahit-Oben-Karakoyun',
      youtube: 'https://www.youtube.com/watch?v=vdBw9ONlsiY',
      spotify: 'https://open.spotify.com/artist/2O8jY0TevDFs7R9tzkh4SH',
    },
  },
  {
    id: '1973-canim-kardesim-ost',
    slug: 'canim-kardesim-film-muzigi',
    title: 'Canım Kardeşim (Film Müziği) — Seçme Kayıtlar',
    year: 1973,
    type: 'compilation',
    label: '—',
    cover: '/images/covers/1973-canim-kardesim.jpg',
    description:
      '1973 yapımı “Canım Kardeşim” film müziklerinden seçmeler. (Ödül: Altın Koza En İyi Film Müziği)',
    tracks: [],
    external: {
      wikipedia: 'https://tr.wikipedia.org/wiki/Kategori%3ACahit_Oben%27in_m%C3%BCzi%C4%9Fini_yapt%C4%B1%C4%9F%C4%B1_filmler',
      youtube: 'https://www.youtube.com/results?search_query=can%C4%B1m+karde%C5%9Fim+cahit+oben',
    },
  },
  {
    id: '1978-nankor',
    slug: 'nankor-seveceksen-beni-sev',
    title: 'Nankör / Seveceksen Beni Sev',
    year: 1978,
    type: 'single',
    label: '—',
    cover: '/images/covers/1978-nankor.jpg',
    tracks: [
      { id: 'a1', title: 'Nankör' },
      { id: 'b1', title: 'Seveceksen Beni Sev' },
    ],
    external: {
      spotify:
        'https://open.spotify.com/artist/2O8jY0TevDFs7R9tzkh4SH',
      lastfm: 'https://www.last.fm/music/Cahit+Oben/+albums',
    },
  },
  // Dijital yeniden yayımlar (örnek)
  {
    id: '2022-me-anytime',
    slug: 'me-anytime-2022',
    title: 'Me / Anytime (Reissue)',
    year: 2022,
    type: 'single',
    label: 'Grafson (dijital)',
    cover: '/images/covers/2022-me-anytime.jpg',
    tracks: [
      { id: 'a1', title: 'Me' },
      { id: 'b1', title: 'Anytime' },
    ],
    external: {
      qobuz:
        'https://www.qobuz.com/ca-en/interpreter/cahit-oben/1210390',
      spotify: 'https://open.spotify.com/artist/2O8jY0TevDFs7R9tzkh4SH',
    },
  },
];
