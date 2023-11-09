import styles from './Hero.module.scss';

export default function Hero({ imageUrl, imageAlt, children }) {
  return (
    <div className={styles.heroContainer}>
      <img
        src={imageUrl}
        alt={imageAlt}
        className={styles.heroImage}
        height="100%"
        width="100%"
      />
      <div className={styles.overlay}>{children}</div>
    </div>
  );
}
