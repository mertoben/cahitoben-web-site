
import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://cahitoben.com'
  const paths = ['/', '/about', '/discography', '/news', '/art', '/listen', '/contact', '/privacy', '/terms', '/copyright']
  return paths.map(p => ({ url: base+p, lastModified: new Date() }))
}
