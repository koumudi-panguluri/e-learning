import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Dashboard from './dashboard'
import homeStyles from "../styles/Home.module.css";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-learning</title>
        <meta name="description" content="E-learning next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${homeStyles.main_container} w-full`}>
        <Dashboard />
      </div>
    </div>
  )
}

export default Home
