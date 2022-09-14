import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Intranet/Navbar";

const intranet: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carleton University | Intranet </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:py-10 lg:px-8">
        <h1 className="text-cu-black:900 text-3xl font-medium tracking-tight">
          Dashboard
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <div className=" border-2 ">aside</div>
          <div className="col-span-3 border-2">span</div>
        </div>
      </div>
    </>
  );
};

export default intranet;
