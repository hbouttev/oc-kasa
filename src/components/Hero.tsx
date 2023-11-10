import React from "react";
import styles from './Hero.module.scss';

interface HeroProps {
  imageUrl: string;
  imageAlt: string;
  children?: React.ReactNode;
}

export default function Hero({ imageUrl, imageAlt, children }: HeroProps) {
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
