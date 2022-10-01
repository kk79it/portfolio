import type { AppProps } from "next/app";
import ReadingTopicProvider from "../hooks/reading-topic";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReadingTopicProvider>
      <Component {...pageProps} />
    </ReadingTopicProvider>
  );
}

export default MyApp;
