import { Suspense } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Paper,
  Button,
} from '@mui/material';
import { useSuspensePosts } from '../hooks/usePosts';

function PostsContent() {
  const { data, refetch, isFetching } = useSuspensePosts();

  return (
    <>
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

      {!isFetching && (
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
    </>
  );
}

export default function ReactQuerySuspense() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Posts (JSONPlaceholder)
      </Typography>
      
      <Suspense fallback={
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      }>
        <PostsContent />
      </Suspense>
    </Box>
  );
}
