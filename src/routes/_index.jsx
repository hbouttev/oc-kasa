import { useLoaderData } from 'react-router-dom';
import { getHousings } from '../mocked/Housings.model';
import heroImage from '../assets/hero1.png';
import Hero from '../components/Hero';

export async function loader() {
  const housings = await getHousings();
  console.log('loader: ', housings);
  return { housings };
}

export default function Home() {
  const { housings } = useLoaderData();
  console.log('Home: ', housings);
  return (
    <div>
      <Hero
        imageUrl={heroImage}
        imageAlt="Paysage saisissant de falaises le long de la mer."
      >
        Chez vous, partout et ailleurs
      </Hero>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quia, quae voluptates voluptatem quod
        voluptatibus quos doloribus quidem voluptate. Quisquam, quibusdam, quia,
        quae voluptates voluptatem quod voluptatibus quos doloribus quidem
        voluptate.
      </p>
      <pre>{JSON.stringify(housings, null, 2)}</pre>
    </div>
  );
}
