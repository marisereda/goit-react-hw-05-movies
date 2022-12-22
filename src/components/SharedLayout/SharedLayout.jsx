import { Outlet, Link } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="movies">Movies</Link>
          </li>
        </ul>
        {/* <p>SharedLayout</p> */}
      </header>

      <Outlet />
    </div>
  );
};

export default SharedLayout;
