import Head from 'next/head'

export default function Header({params}: {params: any}) {
  params = Object.assign({
    title: 'stpo',
    description: 'ストッポ',
    image: 'https://example.com'
  }, params)

  return (
    <Head>
      <title>{params.title}</title>
      <meta name="description" content="{params.description}" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"></link>
    </Head>
  )
}
