import type { NextPage } from "next";
import Head from "next/head";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/FooterStandard";
import Navbar from "../../components/EventCalendar/Navbar";
import Container from "../layouts/components/_container";
import Columns from "../layouts/components/_columns";
import FeaturedEvents from "../../components/EventCalendar/FeaturedEvents";
import EventCard from "../../components/Cards/EventCard";

const EventCalendar: NextPage = () => {
  return (
    <>
      <Head>
        <title>Event Calendar | Carleton University</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <FeaturedEvents />
        {/* <Featured /> */}
      </main>

      <Footer />
    </>
  );
};

export default EventCalendar;
