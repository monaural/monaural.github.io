import type { InferGetStaticPropsType, NextPage } from 'next'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'
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
    <Layout head={{type:'website'}}>
      {allPosts.map((post, i) => (
        <PostCard post={post} key={i} />
      ))}
    </Layout>
  )
}

export default Home
