import type { NextPage } from "next";
import Head from "next/head";
import FooterCurrent from "../../../components/Footer/FooterCurrent";
import Navbar from "../../../components/Navbar/Navbar";
import Settings from "../../../components/Settings/Settings";

const Intranet: NextPage = () => {
  return (
    <>
      <Head>
        <title>Settings - Intranet | Carleton University </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Settings />
      <FooterCurrent />
    </>
  );
};

export default Intranet;