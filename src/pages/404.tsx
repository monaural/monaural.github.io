import Layout from '../components/Layout'

export default function Custom404() {
  return (
    <Layout
      head={{
        title: '404 not found'
      }}
    >
      <title>404</title>
      <h1>404 Not Found</h1>
      <p>page not found.</p>
    </Layout>
  )
}
