import { NextPage, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/Layout'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug)
  const content = await markdownToHtml(post.content)
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout
      head={{
        title: post.title,
        image: post.thumbnail
      }}
      // todo: description
    >
      <article>
        <h1>{post.title}</h1>
        <p><time>{post.date}</time></p>

        <p>tags:&nbsp;
          {post.tags.map((tag: string) => (
            <Link href={`/tags/${tag}`} key={tag}>
              <a>{tag}
              &nbsp;
              </a>
            </Link>
          ))}
        </p>

        <br/>

        {post.thumbnail &&
          <p>
            <img src={post.thumbnail} alt="thumbnail image" />
          </p>
        }
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  )
}

export default Post;
