import { useLoaderData } from 'react-router-dom';
import type { LoaderFunctionArgs } from 'react-router-dom';
import type { LoaderData } from '../types/react-router';
import type { Housing } from '../types/kasa.ts';
import styles from './housings.$housingId.module.scss';
import ImageCarousel from '../components/ImageCarousel.tsx';
import RatingStars from '../components/RatingStars.tsx';
import Tag from '../components/Tag.tsx';
import HostCard from '../components/HostCard.tsx';
import Collapsible from '../components/Collapsible.tsx';

export async function loader({ request, params }: LoaderFunctionArgs) {
  const res = await fetch(`/logements.json`, {
    signal: request.signal,
  });
  const housings: Housing[] = await res.json();
  const housing = housings.find((housing) => housing.id === params.housingId);
  if (!housing) {
    throw new Response('', { status: 404, statusText: 'Not Found' });
  }
  return { housing };
}

export default function HousingPage() {
  const { housing } = useLoaderData() as LoaderData<typeof loader>;
  return (
    <>
      <div className={styles.carouselContainer}>
        <ImageCarousel images={housing.pictures} />
      </div>
      <div className={styles.headerContainer}>
        <div className={styles.headerOverview}>
          <h1 className={styles.title}>{housing.title}</h1>
          <p className={styles.location}>{housing.location}</p>
          <div className={styles.tags}>
            {housing.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className={styles.headerInfos}>
          <HostCard name={housing.host.name} picture={housing.host.picture} />
          <RatingStars rating={parseInt(housing.rating)} />
        </div>
      </div>

      <div className={styles.detailsContainer}>
        <Collapsible title="Description" titleTagName="h2" size="medium">
          <p>{housing.description}</p>
        </Collapsible>
        <Collapsible title="Équipements" titleTagName="h2" size="medium">
          <ul>
            {housing.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapsible>
      </div>
    </>
  );
}
