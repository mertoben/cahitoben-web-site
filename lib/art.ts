
export type Artwork = { id:string; title:string; image:string; series?:string; year?:number; description?:string, instagramUrl?:string }
export const ARTWORKS: Artwork[] = [
  { id:'DKMUplTIv4E', title:'Soyut 01', image:'/images/art/art1.jpg', series:'Soyut', year:2024, description:'Akrilik, tuval.', instagramUrl:'https://www.instagram.com/p/DKMUplTIv4E/' },
  { id:'DKFIkgsIrZe', title:'Peyzaj 01', image:'/images/art/art2.jpg', series:'Peyzaj', year:2024, description:'Yağlıboya, tuval.', instagramUrl:'https://www.instagram.com/p/DKFIkgsIrZe/' },
  { id:'DHgCo7jKiwy', title:'Soyut 02', image:'/images/art/art3.jpg', series:'Soyut', year:2024, description:'Akrilik, tuval.', instagramUrl:'https://www.instagram.com/p/DHgCo7jKiwy/' }
]
