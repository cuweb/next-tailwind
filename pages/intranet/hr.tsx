import type { NextPage } from "next";
import Head from "next/head";
import FooterCurrent from "../../components/Footer/FooterCurrent";
import Navbar from "../../components/Intranet/Navbar";
import Panel from "../../components/Intranet/Panel";
import Profile from "../../components/Intranet/Profile";
import Stats from "../../components/Intranet/stats";
import Table from "../../components/Intranet/Table";

const IntranetHR: NextPage = () => {
  return (
    <>
      <Head>
        <title>HR - Intranet | Carleton University </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Profile />
      <div className="mx-auto max-w-7xl p-4">
        <div className="grid grid-cols-1 gap-8 py-4 sm:grid-cols-2">
          <Panel title="Pay Forms" />
          <Panel title="Benefits" />
        </div>
        <div className="grid grid-cols-1 gap-8 py-4 sm:grid-cols-3">
          <Panel title="HR Link" />
          <Panel title="Pension Statement" />
          <Panel title="Quebec Tax form" />
        </div>

        <Table />
        <Stats />
      </div>

      <FooterCurrent />
    </>
  );
};

export default IntranetHR;
