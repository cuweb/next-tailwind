import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Intranet/Profile";
import Events from "../../components/Intranet/Events";
import News from "../../components/Intranet/News";
import FooterCurrent from "../../components/Footer/FooterCurrent";

const Intranet: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard - Intranet | Carleton University </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Profile />
      <News />
      <Events />
      <FooterCurrent />
    </>
  );
};

export default Intranet;
