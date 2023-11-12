import kasaLogoWhite from '../assets/logos/kasa-logo-white.svg';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <img src={kasaLogoWhite} alt="Kasa logo" height={40} />
      <p className={styles.copyright}>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
