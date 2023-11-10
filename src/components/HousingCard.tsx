import styles from './HousingCard.module.scss';
import type { Housing } from '../types/kasa.ts';

interface HousingProps {
  housing: Housing;
}

export default function HousingCard({ housing }: HousingProps) {
  return (
    <div className={styles.card}>
      <img
        src={housing.cover}
        alt={`Cover photo of ${housing.title}`}
        className={styles.image}
        height="100%"
        width="100%"
      />
      <div className={styles.overlay}>{housing.title}</div>
    </div>
  );
}
