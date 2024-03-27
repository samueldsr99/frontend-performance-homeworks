import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Navbar from "../components/Navbar";

import "../../public/css/bootstrap.min.css";
import "../../public/css/bootstrap-icons.min.css";
import "../toolplate-crispy-kitchen.css";
import Footer from "./components/Footer";

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

        <Link href="https://fonts.googleapis.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
          rel="stylesheet"
          media="print"
          // onLoad="this.onload=null;this.removeAttribute('media');"
          fetchPriority="high"
        />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/bootstrap-icons.min.css" rel="stylesheet" />
        <link href="/css/tooplate-crispy-kitchen.css" rel="stylesheet" />
      </Head>
      <body>
        <main>
          <Navbar />
          {children}
        </main>
        <Footer />

        <Script src="/js/jquery.min.js" defer />
        <Script src="/js/bootstrap.bundle.min.js" defer />
        <Script src="../js/custom.js" defer />
      </body>
    </html>
  );
}
