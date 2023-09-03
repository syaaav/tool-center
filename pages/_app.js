import "../styles/globals.scss";
import createEmotionCache from '../lib/createEmotionCache';
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <main>
        <Component {...pageProps} />
      </main>
    </CacheProvider>
  );
}

export default MyApp;
