import Link from 'next/link';
import Investment from './../components/investment';
import styles from './../styles/Footer.module.scss';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwiiterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YoutubeIcon from '@material-ui/icons/YouTube';

export default function Footer(props) {
  let date = new Date();
  let year = date.getFullYear();
  let showInvestment = props.showInvestment;
  return (
    <footer className={styles.footer}>
      <div>
        {(() => {
          if (props.showInvestment) {
            return <Investment />;
          } else {
            return;
          }
        })()}
      </div>
      <div className={styles.footerDetails}>
        <div className={styles.addresses}>
          <div className={styles.address}>
            <span className={styles.subTitle}>Tanzania Office</span>
            <ul className={styles.contents}>
              <li>Head Office: Mega Complex - 3rd Floor. Arusha, Tanzania</li>
              <li>Phone : +255 634 345 324</li>
              <li>Email : info@cfxgroup.com</li>
            </ul>
          </div>
          <div className={styles.address}>
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
          <div className={styles.icons}>
            <a href="#">
              <WhatsAppIcon fontSize={'large'} />
            </a>
            <a href="#">
              <TelegramIcon fontSize={'large'} />
            </a>
            <a href="#">
              <InstagramIcon fontSize={'large'} />
            </a>
            <a href="#">
              <TwiiterIcon fontSize={'large'} />
            </a>
            <a href="#">
              <FacebookIcon fontSize={'large'} />
            </a>
            <a href="#">
              <YoutubeIcon fontSize={'large'} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {year} CFX group. All rights reserved.
      </div>
    </footer>
  );
}
