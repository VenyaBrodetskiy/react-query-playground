import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api/posts';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
};

export const useSuspensePosts = () => {
  return useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
};
