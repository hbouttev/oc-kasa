import { useLoaderData } from 'react-router-dom';
import { getHousing } from '../mocked/Housings.model.js';

export async function loader({ params }) {
  const housing = await getHousing(params.housingId);
  if (!housing) {
    throw new Response('Not Found', { status: 404 });
  }
  return { housing };
}

export default function Housing() {
  const { housing } = useLoaderData();
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
