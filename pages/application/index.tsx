import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../components/footer';
import styles from '../../styles/Inv.Application.module.scss';

export default function Application() {
  return (
    <>
      <Head>
        <title>Investment Application</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image src="/logo.png" width="80" height="60" alt="CFX logo" />
            </a>
          </Link>
        </div>
        <div className={styles.contents}>
          <div className={styles.hint}>
            <p>
              Fill your personal information below. If you are already a member,
              <br />
              try{' '}
              <Link href="#">
                <a>sing in</a>
              </Link>
            </p>
          </div>
          <form className={styles.form}>
            <div className={styles.inputField}>
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="fName"
                autoComplete={'off'}
              />
            </div>

            <div className={styles.inputField}>
              <label htmlFor="lName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lName"
                autoComplete={'off'}
              />
            </div>

            <div className={styles.inputField}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete={'off'}
              />
            </div>

            <div className={styles.inputField}>
              <label htmlFor="phone">Phone Number</label>
              <input type="text" name="phone" id="phone" autoComplete={'off'} />
            </div>

            <div className={styles.inputField}>
              <label htmlFor="pwd">password</label>
              <input type="password" name="pwd" id="pwd" autoComplete={'off'} />
            </div>

            <div className={styles.inputField}>
              <label htmlFor="rpwd">Re-enter Password</label>
              <input
                type="password"
                name="rpwd"
                id="rpwd"
                autoComplete={'off'}
              />
            </div>

            <input type="submit" value="next" />
          </form>
          <div className={styles.form}></div>
        </div>
      </main>
      <Footer showInvestment={false} />
    </>
  );
}
