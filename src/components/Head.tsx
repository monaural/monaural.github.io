import Head from 'next/head'

export default function Header({params}: {params: any}) {
  const baseUrl = 'https://matsuoshi.github.io'

  params = {
    title: (params.title ? `${params.title} | ` : '') + 'stpo',
    description: params.description || 'ストッポ',
    image: params.image || '/img/stpo.png',
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
      <meta property="og:site_name" content="stpo ストッポ" />
      {/* <meta name="og:url" content={params.url} /> */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"></link>
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </Head>
  )
}
