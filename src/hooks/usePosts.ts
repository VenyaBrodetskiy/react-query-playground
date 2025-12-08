import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api/posts';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 15, // 15 seconds
  });
};

export const useSuspensePosts = () => {
  return useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 15, // 15 seconds
  });
};
