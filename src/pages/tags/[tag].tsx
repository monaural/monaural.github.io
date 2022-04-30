import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getPostsByTag, getAllTags } from "../../lib/api";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths = async () => {
  const tags = getAllTags();
  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const allPosts = getPostsByTag(params.tag);
  return {
    props: {
      allPosts,
      tag: params.tag
    }
  };
};

const Home: NextPage<Props> = ({ allPosts, tag }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Tag: {tag}
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
      </main>
    </div>
  )
}

export default Home
