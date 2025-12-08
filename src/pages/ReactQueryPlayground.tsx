import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
  Paper,
  Button,
} from '@mui/material';
import { usePosts } from '../hooks/usePosts';

export default function ReactQueryPlayground() {
  const { data, isFetching, isError, error, refetch } = usePosts();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Posts (JSONPlaceholder)
      </Typography>
      
      <Button 
        variant="contained" 
        onClick={() => refetch()} 
        sx={{ mb: 2 }}
      >
        Refetch
      </Button>

      {isFetching && (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      )}
      
      {isError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Error: {error instanceof Error ? error.message : 'Unknown error'}
        </Alert>
      )}

      {data && !isFetching && (
        <Paper elevation={1}>
          <List>
            {data.map((post) => (
              <ListItem key={post.id} divider>
                <ListItemText 
                  primary={post.title} 
                  secondary={post.body} 
                  slotProps={{ primary: { fontWeight: 'bold' } }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
}
