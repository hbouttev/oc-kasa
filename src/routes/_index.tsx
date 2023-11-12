import { Link, useLoaderData } from 'react-router-dom';
import type { LoaderFunctionArgs } from 'react-router-dom';
import type { LoaderData } from '../types/react-router';
import type { Housing } from '../types/kasa.ts';
import heroImage from '../assets/images/hero1.png';
import Hero from '../components/Hero';
import HousingCard from '../components/HousingCard';
import styles from './_index.module.scss';

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetch(`/logements.json`, {
    signal: request.signal,
  });
  const housings: Housing[] = await res.json();
  return { housings };
}

export default function HomePage() {
  const { housings } = useLoaderData() as LoaderData<typeof loader>;

  return (
    <>
      <Hero
        imageUrl={heroImage}
        imageAlt="Paysage saisissant de falaises le long de la mer."
      >
        Chez vous,
        <br className={styles.mobileOnly} aria-hidden /> partout et ailleurs
      </Hero>
      <div className={styles.housingsContainer}>
        {housings.map((housing) => (
          <Link to={`/housings/${housing.id}`} key={housing.id}>
            <HousingCard rootClassName={styles.housingCard} housing={housing} />
          </Link>
        ))}
      </div>
    </>
  );
}
