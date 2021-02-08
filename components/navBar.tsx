import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/NavBar.module.scss";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_main}>
        <span className={styles.nav_logo}>
          <Link href="/">
            <a>
              <Image src="/logo.png" width="80" height="60" alt="CFX logo" />
            </a>
          </Link>
        </span>
        <div className={styles.nav_tooltip}>
          <button>Sign In</button>
          <div className={styles.nav_humburger} onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className={styles.nav_el}>
        <ul className={styles.nav_links}>
          <li className={styles.nav_link_item} onClick={closeMobileMenu}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.nav_link_item} onClick={closeMobileMenu}>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li className={styles.nav_link_item} onClick={closeMobileMenu}>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
