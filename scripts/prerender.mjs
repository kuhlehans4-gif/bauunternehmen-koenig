// Prerendert alle Routen zu statischem HTML (SEO: Crawler bekommen fertiges HTML statt leerer SPA-Hülle).
// React 19 rendert Helmet-Metatags in den Body-Stream — dieses Skript verschiebt sie in den <head>
// und bricht den Build ab, wenn eine Seite ohne Title/Description/Canonical herauskäme.
// Läuft nach "vite build" + "vite build --ssr". Aufruf: node scripts/prerender.mjs
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const { render, articleSlugs } = await import(pathToFileURL(join(root, 'dist-server', 'entry-server.js')).href)

const leistungSlugs = ['maurer-betonbau', 'sanierung', 'innenausbau', 'fassade']
const standortSlugs = ['markkleeberg', 'taucha', 'schkeuditz']

const routes = [
  '/',
  '/leistungen',
  ...leistungSlugs.map((s) => `/leistungen/${s}`),
  '/referenzen',
  '/ueber-uns',
  '/ratgeber',
  ...articleSlugs.map((slug) => `/ratgeber/${slug}`),
  ...standortSlugs.map((s) => `/standorte/${s}`),
  '/kontakt',
  '/impressum',
  '/datenschutz',
]

const template = await readFile(join(dist, 'index.html'), 'utf-8')
const SEO_BLOCK = /<!--seo-start-->[\s\S]*?<!--seo-end-->/
const ROOT_DIV = '<div id="root"></div>'

if (!SEO_BLOCK.test(template)) throw new Error('index.html: <!--seo-start-->…<!--seo-end--> Marker fehlt')
if (!template.includes(ROOT_DIV)) throw new Error('index.html: <div id="root"></div> fehlt')

// SEO-relevante Tags, die die <SEO>-Komponente in den Body rendert und die in den <head> gehören
const HEAD_TAG_PATTERNS = [
  /<title>[\s\S]*?<\/title>/g,
  /<meta\s[^>]*?(?:name|property)="(?:description|keywords|robots|og:[^"]*|twitter:[^"]*|article:[^"]*)"[^>]*?\/?>/g,
  /<link\s[^>]*?rel="canonical"[^>]*?\/?>/g,
  /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
]

function buildPage(url) {
  const { html } = render(url)

  let body = html
  const headTags = []
  for (const pattern of HEAD_TAG_PATTERNS) {
    body = body.replace(pattern, (tag) => {
      headTags.push(tag)
      return ''
    })
  }

  const head = headTags.join('\n    ')
  if (!/<title>.+<\/title>/.test(head)) throw new Error(`${url}: kein <title> gerendert`)
  if (!head.includes('name="description"')) throw new Error(`${url}: keine Meta-Description gerendert`)
  // Canonical ist Pflicht auf indexierbaren Seiten; noindex-Seiten (404, Impressum, Datenschutz) haben bewusst keinen
  const isIndexable = head.includes('content="index, follow"')
  if (isIndexable && !head.includes('rel="canonical"')) throw new Error(`${url}: kein Canonical gerendert`)
  if (!body.trim()) throw new Error(`${url}: leeres SSR-Markup`)

  return template.replace(SEO_BLOCK, head).replace(ROOT_DIV, `<div id="root">${body}</div>`)
}

for (const route of routes) {
  const page = buildPage(route)
  const outFile = route === '/' ? join(dist, 'index.html') : join(dist, route.slice(1), 'index.html')
  await mkdir(dirname(outFile), { recursive: true })
  await writeFile(outFile, page)
  console.log(`prerendered ${route}`)
}

// 404-Seite: wird von Vercel für unbekannte URLs mit Status 404 ausgeliefert.
// noindex, bewusst ohne Canonical (die angefragte URL existiert nicht).
await writeFile(join(dist, '404.html'), buildPage('/404-not-found'))
console.log(`prerendered /404.html — ${routes.length + 1} Seiten insgesamt`)

// Sitemap automatisch aus den Routen generieren (noindex-Seiten ausgenommen)
const SITE_URL = 'https://www.bauunternehmen-koenig.com'
const NOINDEX_ROUTES = new Set(['/impressum', '/datenschutz'])
const today = new Date().toISOString().slice(0, 10)
const priorityFor = (route) => {
  if (route === '/') return '1.0'
  if (route.startsWith('/leistungen') || route === '/kontakt') return '0.9'
  if (route.startsWith('/standorte')) return '0.8'
  return '0.7'
}
const sitemapEntries = routes
  .filter((r) => !NOINDEX_ROUTES.has(r))
  .map((r) => `  <url>
    <loc>${SITE_URL}${r === '/' ? '/' : r}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priorityFor(r)}</priority>
  </url>`)
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`
await writeFile(join(dist, 'sitemap.xml'), sitemap)
console.log(`sitemap.xml generiert (${routes.length - NOINDEX_ROUTES.size} URLs)`)
