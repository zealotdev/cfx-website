import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import styles from "../styles/NavBar.module.scss";
import MobileNav from "./mobileNav";
import { useState } from "react";

export default function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const onCloseMenu = () => setClick(false);
  let icon;

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_main}>
        <span className={styles.nav_logo}>
          <Link href="/">
            <a>
              <Image src="/logo.png" width="70" height="50" alt="CFX logo" />
            </a>
          </Link>
        </span>
        <div className={styles.nav_tooltip}>
          <Link href="/notice">
            <button onClick={onCloseMenu}>Sign In</button>
          </Link>

          <div className={styles.nav_humburger}>
            {click ? (
              <ClearIcon fontSize={"large"} onClick={handleClick} />
            ) : (
              <MenuIcon fontSize={"large"} onClick={handleClick} />
            )}
          </div>
        </div>
      </div>
      {click ? (
        <ul className={styles.mobileMenu}>
          <li className={styles.mobi_link_item}>
            <Link href="/">
              <a onClick={onCloseMenu}>Home</a>
            </Link>
          </li>
          <li className={styles.mobi_link_item}>
            <Link href="/about">
              <a onClick={onCloseMenu}>About Us</a>
            </Link>
          </li>
          <li className={styles.mobi_link_item}>
            <Link href="/contact">
              <a onClick={onCloseMenu}>Contact Us</a>
            </Link>
          </li>
          <Link href="/notice">
            <button onClick={onCloseMenu}>Sign In</button>
          </Link>
        </ul>
      ) : (
        false
      )}
      <div className={styles.nav_el}>
        <ul className={styles.nav_links}>
          <li className={styles.nav_link_item} >
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.nav_link_item} >
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li className={styles.nav_link_item} >
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
