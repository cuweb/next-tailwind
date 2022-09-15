import type { NextPage } from "next";
import Head from "next/head";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";
import FooterCurrent from "../../components/Footer/FooterCurrent";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Intranet/Navbar";

import Spotlight from "../../components/Spotlight/Spotlight";

const IntranetCareer: NextPage = () => {
  return (
    <>
      <Head>
        <title>Career - Intranet | Carleton University </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Spotlight />
      <Featured />
      <FooterCurrent />
    </>
  );
};

export default IntranetCareer;
