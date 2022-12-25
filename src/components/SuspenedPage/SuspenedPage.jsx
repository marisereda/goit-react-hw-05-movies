import { Box } from 'components/Box';
import Loader from 'components/Loader';

const SuspenedPage = () => {
  return (
    <Box backgroundColor="bgMain" minHeight="100vh" as="main" padding={6}>
      <Loader />
    </Box>
  );
};

export default SuspenedPage;
