import { Box } from 'components/Box';
const NotFound = () => {
  return (
    <Box
      backgroundColor="bgMain"
      minHeight="100vh"
      as="main"
      padding={7}
      color="bgDark"
    >
      <h1>That page doesn’t exist.</h1>
    </Box>
  );
};

export default NotFound;
