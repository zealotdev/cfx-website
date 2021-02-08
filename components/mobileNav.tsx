import Link from 'next/link';
import Styles from './../styles/mobileNav.module.scss';

export default function MobileNav() {
  return (
    <ul className={Styles.menu}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>Two</li>
    </ul>
  );
}
