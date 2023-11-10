import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

// Will always throw a 404 Response to be caught by the ErrorPage in the
// nearest parent route.
export async function loader() {
  throw new Response('', { status: 404, statusText: 'Not Found' });
}

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    let errorText = error.statusText || error.data;
    if (error.status === 404) {
      errorText = "Oups! La page que vous demandez n'existe pas.";
    }

    return (
      <div>
        <h1>{error.status}</h1>
        <p>{errorText}</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    );
  } else {
    console.error(error);

    return (
      <div>
        <h1>Oups !</h1>
        <p>Désolé, une erreur imprévue s'est produite.</p>
      </div>
    );
  }
}
