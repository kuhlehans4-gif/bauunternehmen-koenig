// Prerendert alle Routen zu statischem HTML (SEO: Crawler bekommen fertiges HTML statt leerer SPA-Hülle).
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

function buildPage(url) {
  const { html, helmet } = render(url)
  const head = [
    helmet?.title?.toString() ?? '',
    helmet?.meta?.toString() ?? '',
    helmet?.link?.toString() ?? '',
    helmet?.script?.toString() ?? '',
  ]
    .filter(Boolean)
    .join('\n    ')
  return template
    .replace(SEO_BLOCK, head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
}

for (const route of routes) {
  const page = buildPage(route)
  const outFile = route === '/' ? join(dist, 'index.html') : join(dist, route.slice(1), 'index.html')
  await mkdir(dirname(outFile), { recursive: true })
  await writeFile(outFile, page)
  console.log(`prerendered ${route}`)
}

// 404-Seite: wird von Vercel für unbekannte URLs mit Status 404 ausgeliefert
await writeFile(join(dist, '404.html'), buildPage('/diese-seite-existiert-nicht'))
console.log(`prerendered /404.html — ${routes.length + 1} Seiten insgesamt`)
