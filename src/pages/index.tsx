import Layout from "@/components/layout/layout";
import useInitialLoad from "@/hooks/useInitialLoad";
import Head from "next/head";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Roboto&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Layout />
      </main>
    </>
  );
}
