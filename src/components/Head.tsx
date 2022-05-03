import Head from 'next/head'

export default function Header({params}: {params: any}) {
  params = Object.assign({
    title: '',
    description: 'ストッポ',
    image: 'https://matsuoshi.github.io/img/stpo.png', // todo
    url: 'https://example.com', // todo
    type: false ? 'website' : 'article' // todo
  }, params)

  params.title += (params.title ? ' | ' : '') + 'stpo'

  return (
    <Head>
      <title>{params.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={params.description} />
      <meta name="og:url" content={params.url} />
      <meta name="og:title" content={params.title} />
      <meta name="og:description" content={params.description} />
      <meta name="og:image" content={params.image} />
      <meta name="og:type" content={params.type} />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"></link>
    </Head>
  )
}
