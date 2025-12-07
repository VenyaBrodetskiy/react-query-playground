import { Suspense, lazy } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './routes';
import theme from './theme';

const ReactQueryDevtools = lazy(() =>
  import('@tanstack/react-query-devtools').then((res) => ({
    default: res.ReactQueryDevtools,
  }))
);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
        <Suspense fallback={null}>
          <ReactQueryDevtools initialIsOpen={false} />
        </Suspense>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
