// import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box';
import { Link } from './Header.styled';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box backgroundColor="bgDark" boxShadow="primary" as="header">
      <Box
        width="container"
        marginLeft="auto"
        marginRight="auto"
        paddingTop={5}
        paddingBottom={5}
        paddingLeft={3}
        paddingRight={3}
        as="div"
      >
        <Box display="flex" alignItems="center" gridGap={5} as="nav">
          <Link to="/">Home</Link>

          <Link to="movies">Movies</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
