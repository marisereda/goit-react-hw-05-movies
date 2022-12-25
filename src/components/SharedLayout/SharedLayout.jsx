import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box';
import Header from 'components/Header';

const SharedLayout = () => {
  return (
    <Box as="div">
      <Header />
      <Outlet />
    </Box>
  );
};

export default SharedLayout;
