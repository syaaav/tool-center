import "../styles/globals.scss";
import { Dela_Gothic_One } from "@next/font/google";

const delaGothicOne = Dela_Gothic_One({
  weight: "400",
  // subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={delaGothicOne.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
