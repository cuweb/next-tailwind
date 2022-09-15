import type { NextPage } from 'next';
import Head from 'next/head';
import FooterCurrent from '../../components/Footer/FooterCurrent';
import Navbar from '../../components/Navbar/Navbar';
import Profile from '../../components/Intranet/Profile';
import Jobs from '../../components/Intranet/Jobs';

const IntranetCareer: NextPage = () => {
  return (
    <>
      <Head>
        <title>Career - Intranet | Carleton University </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative bg-gray-300">
        <Navbar />
        <Profile />
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-4">
          <Jobs />
          <Jobs />
        </div>
        <FooterCurrent />
      </div>
    </>
  );
};

export default IntranetCareer;
