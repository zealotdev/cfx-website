import Head from 'next/head';
import Image from 'next/image';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import NavBar from './../../components/navBar';
import styles from '../../styles/About.module.scss';
import Footer from '../../components/footer';

export default function About() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="CFX international company has spread its wings across the globe"
        />
        <title>CFX-About Us</title>
      </Head>
      <body>
        <NavBar />

        <main>
          <section className={styles.intro}>
            <h4>Who We Are</h4>
            <h2>We are international group of companies.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              aspernatur quia earum labore animi, ipsum vitae reprehenderit
              magnam?
            </p>
          </section>
          <section className={styles.coreValues}>
            <h4>Our Values</h4>

            <div className={styles.values}>
              <div className={styles.valueItem}>
                <Image
                  src="/shield.svg"
                  height={100}
                  width={200}
                  layout="intrinsic"
                />
                <div className={styles.valueDetails}>
                  <span>Secured Service.</span>
                  <p>
                    Our sole purpose is to provide assurance and security to our
                    customers.
                  </p>
                </div>
              </div>
              <div className={styles.valueItem}>
                <Image
                  src="/thumbs.svg"
                  height={100}
                  width={200}
                  layout="intrinsic"
                />
                <div className={styles.valueDetails}>
                  <span>Quality Delivery.</span>
                  <p>
                    Our sole purpose is to provide assurance and security to our
                    customers.
                  </p>
                </div>
              </div>
              <div className={styles.valueItem}>
                <Image src="/award.svg" height={100} width={200} />
                <div className={styles.valueDetails}>
                  <span>Result Oriented.</span>
                  <p>
                    Our sole purpose is to provide assurance and security to our
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.mission}>
            <h4>Our Mission</h4>
            <p>
              <FormatQuoteIcon />
              Our purpose is to facilitate the society's sustainable development
              by providing technological based solutions.
              <FormatQuoteIcon />
            </p>
          </section>
        </main>
        <Footer showInvestment={true} />
      </body>
    </div>
  );
}
