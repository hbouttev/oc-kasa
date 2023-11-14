import styles from './RatingStars.module.scss';
import StarActive from '../assets/icons/star-active.svg?react';
import StarInactive from '../assets/icons/star-inactive.svg?react';

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars({ rating }: RatingStarsProps) {
  const activeStars = Array.from({ length: rating }, (_, i) => i + 1);
  let inactiveStars: number[] = [];
  if (rating < 5) {
    inactiveStars = Array.from(
      { length: 5 - rating },
      (_, i) => rating + 1 + i
    );
  }

  return (
    <div className={styles.starsContainer}>
      {activeStars.map((star) => (
        <StarActive key={star} className={styles.star} />
      ))}
      {inactiveStars.map((star) => (
        <StarInactive key={star} className={styles.star} />
      ))}
    </div>
  );
}
