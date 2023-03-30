import { DataContextProvider } from '@/contexts/Store';
import '@/styles/globals.css';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
export default function App({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Component {...pageProps} />
     </DataContextProvider>
  );
}
