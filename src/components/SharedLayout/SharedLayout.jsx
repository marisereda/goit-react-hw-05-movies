import { Outlet, Link } from 'react-router-dom';
import { Box } from 'components/Box';
import Header from 'components/Header';

const SharedLayout = () => {
  return (
    <Box as="div">
      {/* <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="movies">Movies</Link>
          </li>
        </ul>
        <p>SharedLayout</p>
      </header> */}

      <Header />

      <Outlet />
    </Box>
  );
};

export default SharedLayout;
