import type { NextPage } from "next";
import Head from "next/head";
import FooterCurrent from "../../components/Footer/FooterCurrent";
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Intranet/Profile";
import Jobs from "../../components/Intranet/Jobs";

const IntranetCareer: NextPage = () => {
  return (
    <>
      <Head>
        <title>Career - Intranet | Carleton University </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Profile />
      <Jobs/>
      <FooterCurrent />
    </>
  );
};

export default IntranetCareer;
