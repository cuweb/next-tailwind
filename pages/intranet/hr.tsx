import type { NextPage } from "next";
import Head from "next/head";
import FooterIntranet from "../../components/Footer/FooterIntranet";
import Navbar from "../../components/Intranet/Navbar";
import Panel from "../../components/Intranet/Panel";
import Profile from "../../components/Intranet/Profile";
import Stats from "../../components/Intranet/Stats";

import Table from "../../components/Intranet/Table";

const IntranetHR: NextPage = () => {
  return (
    <>
      <Head>
        <title>HR - Intranet | Carleton University </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative bg-[#f3f3f3]">
        <Navbar />
        <Profile />

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2">
          <Panel title="Pay Forms" />
          <Panel title="Benefits" />
        </div>

        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <Panel title="HR Link" />
          <Panel title="Pension Statement" />
          <Panel title="Quebec Tax form" />
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl ">
          <Table />
          <Stats />
        </div>
        <FooterIntranet />
      </div>
    </>
  );
};

export default IntranetHR;
