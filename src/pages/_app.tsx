import type { AppProps } from "next/app";
import Script from "next/script";
import { usePageView } from "../hooks/page-view";
import ReadingTopicProvider from "../hooks/reading-topic";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();

  return (
    <>
      <ReadingTopicProvider>
        <Component {...pageProps} />
      </ReadingTopicProvider>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4GD0SP0XQ7"
      />
      <Script id="gtag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-4GD0SP0XQ7');
          `}
      </Script>
    </>
  );
}

export default MyApp;
