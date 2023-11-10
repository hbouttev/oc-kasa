import { NavLink } from 'react-router-dom';
import kasaLogo from '../assets/kasa-logo-red.svg';
import styles from './Header.module.scss';

export default function Header() {
  const navLinkClasses = ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }) =>
    `${styles.navLink} ${
      isActive ? styles.active : isPending ? styles.pending : ''
    }`;

  return (
    <div className={styles.headerContainer}>
      <img src={kasaLogo} alt="Kasa logo" height={68} />
      <nav>
        <NavLink to={`/`} className={navLinkClasses}>
          Accueil
        </NavLink>
        <NavLink to={`about`} className={navLinkClasses}>
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}
