import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/login.module.scss';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | CFX.com</title>
      </Head>
      <main>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image
                src="/logo.png"
                width="80"
                height="60"
                alt="CFX logo"
              ></Image>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
