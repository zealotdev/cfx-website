import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import NavBar from '../components/navBar';
import Hero from '../components/hero';
import Expertise from '../components/expertise';
import Investment from '../components/investment';
import Services from '../components/services';
import Footer from '../components/footer';
import Team from '../components/team';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="robot" content="index, follow" />
        <meta
          name="description"
          content="Humanitarian and technological solutions, tailored to solve your 21st century financial problem."
        />
        <title>CFX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <Hero />
        <Expertise />
        <Services />
      </main>

      <Footer />
    </div>
  );
}
