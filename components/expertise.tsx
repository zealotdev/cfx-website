import Image from 'next/image';
import styles from './../styles/Expertise.module.scss';

export default function () {
  return (
    <section className={styles.expertiseSection}>
      <div className={styles.intro}>
        <h3>We are international.</h3>
        <p>
          We facilitate sustainable economic development to societies in various
          fields of investment and consultancy across the globe.
        </p>
      </div>
      <div className={styles.desc}>
        <h3>Our Expertise</h3>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <Image
                src="/investment.jpg"
                height={900}
                width={700}
                layout="intrinsic"
              />
            </div>
            <div className={styles.card_content}>
              <div className={styles.card_title}>
                Digital Investment Consultancy & Agency.
              </div>
              <div className={styles.card_desc}>
                We provide consultancy and guidance on your journey towards
                digital investment. We introduce you to the global digital
                markets like Forex Market, Stock Markets and Cryptocurrency
                ecosystem and so more.
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <Image
                src="/global-link.jpg"
                height={700}
                width={700}
                layout="intrinsic"
              />
            </div>
            <div className={styles.card_content}>
              <div className={styles.card_title}>
                Technology Consultancy Service.
              </div>
              <div className={styles.card_desc}>
                We believe technology plays an important role on success of
                almost all human economic-endeavor. And we at CFX we have a
                recipe for you.
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <Image
                src="/real-estate.jpg"
                height={700}
                width={700}
                layout="intrinsic"
              />
            </div>
            <div className={styles.card_content}>
              <div className={styles.card_title}>Real Estate Agency.</div>
              <div className={styles.card_desc}>
                Through our-owned Lands and Buildings we target on long term
                development and investment. We also provide knowledge on Real
                Estate Investment Business.
              </div>
            </div>
          </div>{' '}
          <div className={styles.card}>
            <div className={styles.card_image}>
              <Image
                src="/agriculture.jpg"
                height={700}
                width={700}
                layout="intrinsic"
              />
            </div>
            <div className={styles.card_content}>
              <div className={styles.card_title}>Agricultural business.</div>
              <div className={styles.card_desc}>
                Our agribusiness programmes proven to be one of the safe
                investment option <strong>one</strong> can confidently choose to
                opt.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
