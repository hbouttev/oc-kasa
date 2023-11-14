import styles from './ImageCarousel.module.scss';
import ArrowBack from '../assets/icons/arrow-back.svg?react';
import ArrowForward from '../assets/icons/arrow-forward.svg?react';
import { useState } from 'react';

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (previousIndex) => (previousIndex - 1 + images.length) % images.length
    );
  };

  // TODO: Could mount all images in the DOM and use CSS to hide/show them
  //  instead of loading them on demand (using the current index for 'visible'
  //  class)

  return (
    <div className={styles.carousel}>
      <img
        key={`slide-${currentIndex}`}
        className={styles.image}
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        height="100%"
        width="100%"
      />
      <button
        className={`${styles.controls} ${styles.controlsPrevious}`}
        onClick={handlePrevious}
      >
        <ArrowBack className={styles.controlsIcon} />
      </button>
      <button
        className={`${styles.controls} ${styles.controlsNext}`}
        onClick={handleNext}
      >
        <ArrowForward className={styles.controlsIcon} />
      </button>
      <p className={styles.indicator}>
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
}
