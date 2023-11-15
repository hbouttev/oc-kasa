import styles from './HostCard.module.scss';

interface HostCardProps {
  name: string;
  picture: string;
}

export default function HostCard({ name, picture }: HostCardProps) {
  const [firstName, ...rest] = name.split(' ');
  const lastName = rest.join(' ');

  return (
    <div className={styles.hostCard}>
      <p className={styles.name}>
        <span>{firstName}</span>
        <span>{lastName}</span>
      </p>
      <img
        className={styles.picture}
        src={picture}
        alt={`Photo de profil de ${name}`}
      />
    </div>
  );
}
