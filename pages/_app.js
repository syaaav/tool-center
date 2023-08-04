import "../styles/globals.scss";
import React, { useState, useEffect } from "react";
import Loading from "../components/loading";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 20000);
  // }, []);

  return (
    <main>
      {isLoading ? <Loading></Loading> : <Component {...pageProps} />}
    </main>
  );
}

export default MyApp;
