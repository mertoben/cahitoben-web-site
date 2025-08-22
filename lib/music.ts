
export type Track = { id:string; title:string; duration?:string, spotify?:string, youtube?:string }
export type Album = { id:string; title:string; year:number; cover?:string; tracks:Track[]; description?:string }

export const ALBUMS: Album[] = [
  {
    id:'makaram-1965',
    title:'Makaram Sarı Bağlar',
    year:1965,
    cover:'/images/covers/cover1.jpg',
    description:'Erken dönem 45’liklerden bir seçki.',
    tracks:[
      { id:'t1', title:'Makaram Sarı Bağlar', duration:'PT2M50S' },
      { id:'t2', title:'Halime', duration:'PT2M40S' }
    ]
  },
  {
    id:'secme-1970',
    title:'Seçme Kayıtlar',
    year:1970,
    cover:'/images/covers/cover2.jpg',
    tracks:[
      { id:'t1', title:'Her Gün Kavga' },
      { id:'t2', title:'Silifke’nin Yoğurdu' }
    ]
  }
]
