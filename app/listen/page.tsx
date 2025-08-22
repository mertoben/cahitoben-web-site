
export const metadata = { title:'Dinle' }
export default function Listen(){
  return (
    <section className="container py-10">
      <h1 className="text-2xl font-semibold mb-4">Dinle</h1>
      <ul className="space-y-2 list-disc list-inside">
        <li><a href="https://open.spotify.com/artist/2O8jY0TevDFs7R9tzkh4SH" target="_blank" rel="noreferrer">Spotify</a></li>
        <li><a href="https://music.apple.com/tr/artist/cahit-oben/95145871" target="_blank" rel="noreferrer">Apple Music</a></li>
        <li><a href="https://www.youtube.com/channel/UCWiOnChcc4l8peYF7e0XXfw" target="_blank" rel="noreferrer">YouTube</a></li>
      </ul>
    </section>
  )
}
