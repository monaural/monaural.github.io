import type { InferGetStaticPropsType, NextPage } from 'next'
import Layout from '../components/Layout'
import Link from 'next/link'
import { getAllPosts } from '../lib/api';
import styles from '../styles/Home.module.scss'

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags'])
  return {
    props: { allPosts },
  }
}

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <Layout>
      <article>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          {allPosts.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <a className={styles.card}>
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

export default Home
