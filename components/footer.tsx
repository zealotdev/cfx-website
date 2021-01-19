import Link from 'next/link';
import Investment from './../components/investment';
import styles from './../styles/Footer.module.scss';

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <div>
        <Investment />
      </div>
      <div className={styles.footerDetails}>
        <div className={styles.addresses}>
          <div className={styles.addresesTZ}>
            <span className={styles.subTitle}>Tanzania Office</span>
            <ul className={styles.contents}>
              <li>Head Office: Mega Complex - 3rd Floor. Arusha, Tanzania</li>
              <li>Phone : +255 634 345 324</li>
              <li>Email : info@cfxgroup.com</li>
            </ul>
          </div>
          <div className={styles.addresesNG}>
            <span className={styles.subTitle}>Nigeria Office</span>
            <ul className={styles.contents}>
              <li>Head Office: Mega Complex - 3rd Floor. Arusha, Tanzania</li>
              <li>Phone : +255 634 345 324</li>
              <li>Email : info@cfxgroup.com</li>
            </ul>
          </div>
        </div>

        <div className={styles.links}>
          <span className={styles.subTitle}>Links</span>
          <ul className={styles.contents}>
            <li>
              <Link href="/">
                <a className={styles.linksItem}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={styles.linksItem}>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={styles.linksItem}>Contacts</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.communities}>
          <span className={styles.subTitle}>CFX Communities</span>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {year} CFX group. All rights reserved.
      </div>
    </footer>
  );
}
