import type { NextPage } from 'next';
import Head from 'next/head';

import Footer from '../components/Footer/Footer';
import Settings from '../components/Settings/Settings';
import Form from '../components/Settings/Form';
import Navbar from '../components/Navbar/Navbar';

const Demo: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carleton University | Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Settings />
      <Footer />
    </>
  );
};

export default Demo;
