import { use, Suspense, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsContent({ postsPromise }: { postsPromise: Promise<Post[]> | null }) {
  if (!postsPromise) return null;
  
  const posts = use(postsPromise);
  
  return (
    <Paper elevation={1}>
      <List>
        {posts.map((post) => (
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
  );
}

export default function React19Fetch() {
  const [postsPromise, setPostsPromise] = useState<Promise<Post[]> | null>(() => fetchPosts());

  const loadPosts = () => {
    setPostsPromise(fetchPosts());
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Posts (React 19 'use' hook)
      </Typography>
      
      <Button 
        variant="contained" 
        onClick={loadPosts} 
        sx={{ mb: 2 }}
      >
        Refetch
      </Button>

      <Suspense fallback={
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <CircularProgress />
        </Box>
      }>
        <PostsContent postsPromise={postsPromise} />
      </Suspense>
    </Box>
  );
}
