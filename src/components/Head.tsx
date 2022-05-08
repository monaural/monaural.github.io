import Head from 'next/head'

export default function Header({params}: {params: any}) {
  const baseUrl = 'https://monaural.github.io'
  const siteTitle = 'monaural blog'

  params = {
    title: (params.title ? `${params.title} | ` : '') + siteTitle,
    description: params.description || 'モノラル',
    image: params.image || '/img/ogimage.png',
    url: params.url || baseUrl, // todo
    type: params.type || 'article'
  }

  return (
    <Head>
      <title>{params.title}</title>
      <meta name="description" content={params.description} />
      <meta property="og:title" content={params.title} />
      <meta property="og:description" content={params.description} />
      <meta property="og:image" content={`${baseUrl}${params.image}`} />
      <meta property="og:type" content={params.type} />
      <meta property="og:site_name" content={siteTitle} />
      {/* <meta name="og:url" content={params.url} /> */}
      <meta name="twitter:image" content={`${baseUrl}${params.image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={params.title} />
      <meta name="twitter:description" content={params.description} />
      <meta name="twitter:site" content="@matsuoshi" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"></link>
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </Head>
  )
}
