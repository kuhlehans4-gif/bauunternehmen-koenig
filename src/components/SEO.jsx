import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.bauunternehmen-koenig.com'
const DEFAULT_IMAGE = `${SITE_URL}/images/hero.png`

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  keywords,
  type = 'website',
  noindex = false,
  jsonLd = null,
  article = null,
}) {
  const canonical = `${SITE_URL}${path}`
  const fullTitle = title.includes('König') ? title : `${title} | Bauunternehmen König Leipzig`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="Bauunternehmen König" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {article && (
        <>
          <meta property="article:author" content={article.author} />
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.section && <meta property="article:section" content={article.section} />}
        </>
      )}

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
}
