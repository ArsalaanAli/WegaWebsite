import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";

const pop = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={pop.className}>
      <Component {...pageProps} />
    </main>
  );
}
