import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
