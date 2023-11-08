import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <h1> KASA </h1>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`about`}>About</Link>
          </li>
          <li>
            <Link to={`housings/33`}>Logement 33</Link>
          </li>
          <li>
            <Link to={`truc`}>404</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
