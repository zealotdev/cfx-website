
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Hero.module.scss';


export default function () {
  return (
    <section className={styles.heroSection}>
      <h4>We provide</h4>
      <h1>
        Technological Innovative Investment Solutions, tailored to grow you
        financially.
      </h1>
      <p>
        Humanitarian and technological integrated tailored-solutions have proven
        to be the best approach towards tackling 21st century problems. And we,
        at CFX are here to show you how.
      </p>
      <Link href="/notice">
        <button>Get Started.</button>
      </Link>
    </section>
  );
}
