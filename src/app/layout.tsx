import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  display: "swap",
  weight: ["300", "400", "600", "700"],
  fallback: ["sans-serif"],
  subsets: ["latin"],
});

import "../../public/css/bootstrap.min.css";
import "../../public/css/bootstrap-icons.min.css";
import "../toolplate-crispy-kitchen.css";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content="" />
        <meta name="author" content="" />

        <title>Crispy Kitchen - Bootstrap 5 HTML Template</title>

        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/bootstrap-icons.min.css" rel="stylesheet" />
        <link href="/css/tooplate-crispy-kitchen.css" rel="stylesheet" />
      </Head>
      <body>
        <main className={montserrat.className}>
          <Navbar />
          {children}
        </main>

        <Footer />
        <Modal />

        <Script src="/js/jquery.min.js" defer />
        <Script src="/js/bootstrap.bundle.min.js" defer />
      </body>
    </html>
  );
}
