import { Typography, Box } from '@mui/material';

function Home() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome Home
      </Typography>
      <Typography variant="body1">
        Select a page from the menu to get started.
      </Typography>
    </Box>
  );
}

export default Home;
