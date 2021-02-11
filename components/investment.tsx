import Link from 'next/link';
import styles from '../styles/investment.module.scss';

export default function () {
  return (
    <section className={styles.investmentSection}>
      <h2 className={styles.title}>Interested in investing with us?</h2>
      <div className={styles.ctaButtons}>
        <Link href="/notice">
          <button className={styles.ctaOne}>apply now</button>
        </Link>
        <Link href="/notice">
          <button className={styles.ctaTwo}>sign in</button>
        </Link>
      </div>
    </section>
  );
}
