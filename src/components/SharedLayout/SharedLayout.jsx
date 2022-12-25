import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box';
import Header from 'components/Header';
import SuspenedPage from 'components/SuspenedPage';

const SharedLayout = () => {
  return (
    <Box as="div">
      <Header />
      <Suspense fallback={<SuspenedPage />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default SharedLayout;
