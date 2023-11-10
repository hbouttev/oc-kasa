import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import style from './error-page.module.scss';

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
      <div className={style.pageContainer}>
        <h1 className={style.statusCode}>{error.status}</h1>
        <p className={style.errorText}>{errorText}</p>
        <Link to="/" className={style.navigateLink}>
          Retourner sur la page d'accueil
        </Link>
      </div>
    );
  } else {
    console.error(error);

    return (
      <div className={style.pageContainer}>
        <h1 className={style.statusCode}>Oups !</h1>
        <p className={style.errorText}>
          Désolé, une erreur imprévue s'est produite.
        </p>
        <Link to="/" className={style.navigateLink}>
          Retourner sur la page d'accueil
        </Link>
      </div>
    );
  }
}
