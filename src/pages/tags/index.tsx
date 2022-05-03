import type { InferGetStaticPropsType, NextPage } from 'next'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { getAllTags } from '../../lib/api'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  return {
    props: {
      allTags: getAllTags()
    },
  }
}

const TagsIndex: NextPage<Props> = ({ allTags }) => {
  return (
    <Layout
      head={{
        title: 'All Tags'
      }}
    >
      <article>
        <h1>
          All tags
        </h1>

        <ul>
          {allTags.map((tag) => (
            <li key={tag}>
              <Link href={`/tags/${tag}`}>
                <a>{tag}</a>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </Layout>
  )
}

export default TagsIndex
