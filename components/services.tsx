import Head from 'next/head';
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
                Digital Investment Consultancy <br /> & <br /> Agency
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
                <button className={styles.services_listItemOneButton}>
                  Apply Now
                </button>
                <div></div>
              </div>
            </div>
            <div className={styles.services_listItemTwo}>
              <div className={styles.services_listItemTwoDetails}>
                <ul>
                  <li>
                    Get introduced to different digital investment
                    opportunities.
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
                <button className={styles.services_listItemTwoButton}>
                  Apply Now
                </button>
              </div>
              <div className={styles.services_listItemTwoTitle}>
                Technology Consultancy Services
              </div>
            </div>
            <div className={styles.services_listItemOne}>
              <div className={styles.services_listItemOneTitle}>
                Real Estate Agency
              </div>
              <div className={styles.services_listItemOneDetails}>
                <ul>
                  <li>
                    Get introduced to different digital investment
                    opportunities.
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
                <button className={styles.services_listItemOneButton}>
                  Apply Now
                </button>
                <div></div>
              </div>
            </div>
            <div className={styles.services_listItemTwo}>
              <div className={styles.services_listItemTwoDetails}>
                <ul>
                  <li>
                    Get introduced to different digital investment
                    opportunities.
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
                <button className={styles.services_listItemTwoButton}>
                  Apply Now
                </button>
              </div>
              <div className={styles.services_listItemTwoTitle}>
                Technology Consultancy Services
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
