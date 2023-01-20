import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import StickyNavbar from "@/components/StickyNavbar";

const roboto = Roboto({ weight: ["400", "700", "900"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Navbar />
      <StickyNavbar />
      <Component {...pageProps} />
    </main>
  );
}
