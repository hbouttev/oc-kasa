import { useLoaderData } from 'react-router-dom';
import type { LoaderFunctionArgs } from 'react-router-dom';
import type { LoaderData } from '../types/react-router';
import type { Housing } from '../types/kasa.ts';

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
    <div>
      <h2>Housing</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quia, quae voluptates voluptatem quod
        voluptatibus quos doloribus quidem voluptate. Quisquam, quibusdam, quia,
        quae voluptates voluptatem quod voluptatibus quos doloribus quidem
        voluptate.
      </p>
      <pre>{JSON.stringify(housing, null, 2)}</pre>
    </div>
  );
}
