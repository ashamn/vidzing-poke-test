import Layout from "@/components/layout/layout";
import useInitialLoad from "@/hooks/useInitialLoad";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  useInitialLoad();

  return (
    <>
      <Head>
        <title>Vidzing Front-end test</title>
        <meta
          name="description"
          content="Small test for front-end developers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>
      <main>
        <ToastContainer />
        <Layout />
      </main>
    </>
  );
}
