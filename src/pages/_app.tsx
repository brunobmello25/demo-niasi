import type { AppProps } from "next/app";
import { GlobalStylesProvider } from "@/contexts/global-styles-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStylesProvider>
      <Component {...pageProps} />
    </GlobalStylesProvider>
  );
}
