import type { InferGetStaticPropsType, NextPage } from 'next'
import Layout from '../../components/Layout'
import PostCard from '../../components/PostCard'
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
      <h1>
        Tag archive &quot;{tag}&quot;
      </h1>

      {allPosts.map((post, i) => (
        <PostCard post={post} key={i} />
      ))}
    </Layout>
  )
}

export default TagArchive
