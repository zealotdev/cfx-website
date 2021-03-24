import Head from 'next/head';
import Link from 'next/link';
import NavBar from './navBar';
import styles from '../styles/Services.module.scss';

export default function Services() {
  return (
    <>
      <div>
        <div className={styles.services}>
          <section className={styles.services_intro}>
            <h4>What We Offer</h4>
            <p>
              CFX Group joined arms together with other enterprises to bring
              about diversity of services and opportunities just to help you get
              where you financially desire.
            </p>
          </section>
          <section className={styles.services_list}>
            <div className={styles.services_listItemOne}>
              <div className={styles.services_listItemOneTitle}>
                Digital Investment <br /> & <br />
                Consultancy Agency
              </div>

              <div className={styles.services_listItemOneDetails}>
                <ul>
                  <li>
                    Get introduced to different digital investment opportunities
                    and tools.
                  </li>
                  <li>
                    Get trained and mentored the right way, and start earning on
                    you own.
                  </li>
                  <li>
                    Tired of loosing? We provide account management service to
                    forex traders just like you.
                  </li>
                </ul>
                <Link href="/notice">
                  <button className={styles.services_listItemOneButton}>
                    Apply Now
                  </button>
                </Link>
                <div></div>
              </div>
            </div>
            <div className={styles.services_listItemTwo}>
              <div className={styles.services_listItemTwoDetails}>
                <ul>
                  <li>
                    A team of experts is here to ice crack that technology idea
                    for you.
                  </li>
                  <li>
                    Digital Marketing and Branding services to help you reach
                    your targeted customers.
                  </li>
                  <li>
                    Want to build your website or web system using trending
                    technologies that top companies like facebook uses? CFX is
                    here to do it for you.
                  </li>
                  <li>
                    As technology grows and online services increases, data
                    protection becomes concerns to many, and we CFX provide an
                    extensive data protection guidance.
                  </li>
                </ul>
                <Link href="/notice">
                  <button className={styles.services_listItemTwoButton}>
                    Apply Now
                  </button>
                </Link>
              </div>
              <div className={styles.services_listItemTwoTitle}>
                Technology Consultancy <br />& Services
              </div>
            </div>
            <div className={styles.services_listItemOne}>
              <div className={styles.services_listItemOneTitle}>
                Real Estate <br /> & Agriculture business
              </div>
              <div className={styles.services_listItemOneDetails}>
                <ul>
                  <li>
                    Farmland for rent, for those looking for a land to
                    cultivate.
                  </li>
                  <li>
                    Want to turn your land into a business?, CFX is here to
                    consult you about it.
                  </li>
                  <li>
                    Our agribusiness projects gives you an opportunity to invest
                    in agriculture without a need of you to own a farm or have
                    an abounding capital.
                  </li>
                </ul>
                <Link href="/notice">
                  <button className={styles.services_listItemOneButton}>
                    Apply Now
                  </button>
                </Link>
                <div></div>
              </div>
            </div>
            <div className={styles.services_listItemTwo}>
              <div className={styles.services_listItemTwoDetails}>
                <ul>
                  <li>
                    We can help redirect your funds into the right place, with
                    little risk and high fund-security.
                  </li>
                  <li>
                    The company runs a couple of investment projects that you
                    can confidently invest in.
                  </li>
                </ul>
                <Link href="/notice">
                  <button className={styles.services_listItemTwoButton}>
                    Apply Now
                  </button>
                </Link>
              </div>
              <div className={styles.services_listItemTwoTitle}>
                Investment Management Consultancy service
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
