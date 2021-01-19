import styles from '../styles/investment.module.scss';

export default function () {
  return (
    <section className={styles.investmentSection}>
      <h2 className={styles.title}>Interested in investing with us?</h2>
      <div className={styles.ctaButtons}>
        <button className={styles.ctaOne}>apply now</button>
        <button className={styles.ctaTwo}>sing in</button>
      </div>
    </section>
  );
}
