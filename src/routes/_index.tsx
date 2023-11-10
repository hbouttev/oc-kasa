import { useLoaderData } from 'react-router-dom';
import type { LoaderFunctionArgs } from 'react-router-dom';
import type { LoaderData } from '../types/react-router';
import type { Housing } from '../types/kasa.ts';
import heroImage from '../assets/hero1.png';
import Hero from '../components/Hero';
import HousingCard from '../components/HousingCard';

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetch(`/logements.json`, {
    signal: request.signal,
  });
  const housings: Housing[] = await res.json();
  return { housings };
}

export default function HomePage() {
  const { housings } = useLoaderData() as LoaderData<typeof loader>;
  console.log('Home: ', housings);
  return (
    <div>
      <Hero
        imageUrl={heroImage}
        imageAlt="Paysage saisissant de falaises le long de la mer."
      >
        Chez vous, partout et ailleurs
      </Hero>
      <HousingCard housing={housings[0]} />
      <pre>{JSON.stringify(housings, null, 2)}</pre>
    </div>
  );
}
