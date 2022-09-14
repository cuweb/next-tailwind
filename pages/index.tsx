import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Carleton University Projects Wireframes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-cu-red">Carleton University</span>
          <p>Projects Wireframes</p>
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/demo"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-cu-red "
          >
            <h3 className="text-2xl font-bold">Demo Site &rarr;</h3>
            <p className="mt-4 text-xl">Events Calendar wireframe demo site</p>
          </a>

          <a
            href="/settings"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-cu-red  "
          >
            <h3 className="text-2xl font-bold">Setting Panel &rarr;</h3>
            <p className="mt-4 text-xl">
              setting panel for all the projects demo
            </p>
          </a>
          <a
            href="/intranet"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-cu-red  "
          >
            <h3 className="text-2xl font-bold">Intranet &rarr;</h3>
            <p className="mt-4 text-xl">Intranet wireframe</p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
