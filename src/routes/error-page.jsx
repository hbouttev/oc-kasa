import { useRouteError } from 'react-router-dom';

// Will always throw a 404 Response to be caught by the ErrorPage in the
// nearest parent route.
export async function loader() {
  throw new Response('', { status: 404, statusText: 'Not Found' });
}

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops !</h1>
      <p>Désolé, une erreur imprévue s'est produite.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
}
