import type { NextPage } from "next";
import Head from "next/head";
import FooterCurrent from "../../components/Footer/FooterCurrent";
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Intranet/Profile";

const IntranetHR: NextPage = () => {
  return (
    <>
      <Head>
        <title>HR - Intranet | Carleton University </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Profile />
      <FooterCurrent />
    </>
  );
};

export default IntranetHR;
