import type { NextPage } from "next";
import Head from "next/head";

<<<<<<< HEAD
import Profile from "../../components/Intranet/Profile";
import Events from "../../components/Intranet/Events";
import News from "../../components/Intranet/News";
import Top5 from "../../components/Intranet/Top5";
import FooterCurrent from "../../components/Footer/FooterCurrent";
import Navbar from "../../components/Intranet/Navbar";
=======
import Navbar from '../../components/Navbar/Navbar';
import Profile from '../../components/Intranet/Profile';
import Events from '../../components/Intranet/Events';
import News from '../../components/Intranet/News';
import Files from '../../components/Intranet/Files';
import Top5 from '../../components/Intranet/Top5';
import Bookmarks from '../../components/Intranet/Bookmarks';
import FooterIntranet from '../../components/Footer/FooterIntranet';
import Marketplace from '../../components/Intranet/Marketplace';
>>>>>>> main

const Intranet: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard - Intranet | Carleton University </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative bg-[#f3f3f3]">
        <Navbar />
        <Profile />

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <Files />
          <Bookmarks />
          <Files />
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <Top5 />
          <News />
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-4">
          <Events />
          <Marketplace />
        </div>

        <FooterIntranet />
      </div>
    </>
  );
};

export default Intranet;
