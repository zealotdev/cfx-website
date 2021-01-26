import styles from './../styles/Team.module.scss';
import Image from 'next/image';

export default function Team() {
  return (
    <div className={styles.team}>
      <h4 className={styles.teamIntro}>Our Team</h4>
      <div className={styles.teamMembers}>
        <div className={styles.CEO}>
          <Image src="/profileimage.jpeg" height={120} width={100} />

          <div>
            <h3>Chief Executive Officer</h3>
            <p>CEO & Founder of CFX Company</p>
          </div>
        </div>
        <div className={styles.others}>
          <div className={styles.member}>
            <Image src="/profileimage.jpeg" height={120} width={100} />
            <div>
              <h3>Chief Executive Officer</h3>
              <p>CEO & Founder of CFX Company</p>
            </div>
          </div>
          <div className={styles.member}>
            <h3>Chief Executive Officer</h3>
            <Image src="/profileimage.jpeg" height={120} width={100} />
            <div>
              <p>CEO & Founder of CFX Company</p>
            </div>
          </div>
          <div className={styles.member}>
            <Image src="/profileimage.jpeg" height={120} width={100} />
            <div>
              <h3>Chief Executive Officer</h3>
              <p>CEO & Founder of CFX Company</p>
            </div>
          </div>
          <div className={styles.member}>
            <Image src="/profileimage.jpeg" height={120} width={100} />
            <div>
              <h3>Chief Executive Officer</h3>
              <p>CEO & Founder of CFX Company</p>
            </div>
          </div>
          <div className={styles.member}>
            <Image src="/profileimage.jpeg" height={120} width={100} />
            <div>
              <h3>Chief Executive Officer</h3>
              <p>CEO & Founder of CFX Company</p>
            </div>
          </div>
          <div className={styles.member}>
            <Image src="/profileimage.jpeg" height={120} width={40} />
            <div>
              <h3>Chief Executive Officer</h3>
              <p>CEO & Founder of CFX Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
