import type { InferGetStaticPropsType, NextPage } from 'next'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { getPostsByTag, getAllTags } from '../../lib/api'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths = async () => {
  const tags = getAllTags()
  return {
    paths: tags.map(tag => {
      return {params: {tag}}
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const allPosts = getPostsByTag(params.tag)
  return {
    props: {
      allPosts,
      tag: params.tag
    }
  }
}

const TagArchive: NextPage<Props> = ({ allPosts, tag }) => {
  return (
    <Layout
      head={{
        title: `Tag archive: ${tag}`
      }}
    >
      <article>
        <h1>
          Tag archive &quot;{tag}&quot;
        </h1>

        <div>
          {allPosts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <a>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
              </a>
            </Link>
          ))}
        </div>
      </article>
    </Layout>
  )
}

export default TagArchive
