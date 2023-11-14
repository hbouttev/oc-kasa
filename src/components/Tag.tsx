import styles from './Tag.module.scss';

interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  return (
    <span className={styles.tag}>
      {tag}
    </span>
  );
}
