import Head from 'next/head';
import Link from 'next/link';
import styles from './../../styles/Notice.module.scss';

export default function Notice() {
  return (
    <>
      <Head>
        <meta name="description" content="CFX-website public notice" />
        <title>CFX-Notice</title>
      </Head>
      <div className={styles.mainWrapper}>
        <h1>Hello there!✋</h1>
        <span>
          This page is currently under maintenance, you can go back to{' '}
          <Link href="/">
            <a className={styles.link}>Home </a>
          </Link>
          page,Or you can reach out to technical unit via{' '}
          <i className={styles.email}>support@cfxgroupinternational.com</i> or
          company desk email
          <i className={styles.email}> info@cfxgroupinternational.com</i>
        </span>
      </div>
    </>
  );
}
