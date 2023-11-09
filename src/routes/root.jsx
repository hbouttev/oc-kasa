import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './root.module.scss';

export default function Root() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
