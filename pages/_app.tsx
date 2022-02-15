import type { AppProps } from 'next/app';
import GlobalStyles from './../styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { OnlineStatusProvider } from '../components/Utils/useOnlineStatus';
import 'twin.macro';

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      // staleTime: twentyFourHoursInMs,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <OnlineStatusProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </OnlineStatusProvider>
    </>
  );
}

export default MyApp;
