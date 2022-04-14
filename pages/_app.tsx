import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';
import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3} >
      <EntriesProvider>
        <UIProvider>
          <Component {...pageProps} />
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  )
}

export default MyApp
