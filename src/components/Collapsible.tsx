import { ReactNode, useEffect, useRef, useState } from 'react';
import IconChevronDown from '../assets/icons/chevron-down.svg?react';
import styles from './Collapsible.module.scss';

interface CollapsibleProps {
  title: string;
  titleTagName?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div' | 'p';
  size?: 'medium' | 'large';
  contentDelayedAnimation?: boolean;
  children?: ReactNode;
}

export default function Collapsible({
  title,
  titleTagName = 'span',
  size = 'large',
  children,
}: CollapsibleProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentElRef.current) {
      if (open)
        setContentHeight(contentElRef.current?.getBoundingClientRect().height);
      else setContentHeight(0);
    }
  }, [open]);

  const TitleTag = titleTagName;

  return (
    <div className={styles.collapsibleContainer}>
      <div
        className={`${styles.titleContainer} ${
          size === 'medium' ? styles.titleContainerMedium : ''
        }`.trim()}
      >
        <TitleTag
          className={`${styles.title} ${
            size === 'medium' ? styles.titleMedium : ''
          }`.trim()}
        >
          {title}
        </TitleTag>
        <button
          className={styles.collapseButton}
          onClick={() => setOpen((prev) => !prev)}
        >
          <IconChevronDown />
        </button>
      </div>
      <div
        className={styles.collapseContainer}
        style={{ height: contentHeight }}
      >
        <div className={styles.contentContainer} ref={contentElRef}>
          {children}
        </div>
      </div>
    </div>
  );
}
