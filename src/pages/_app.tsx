// src/pages/_app.tsx

import '../styles/globals.scss';        // adjust path if needed
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/newsSlice';  // adjust path based on where your store is

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
