import { NextPage } from "next";

import Navbar from "../../components/EventCalendar/Navbar";
import Banner from "../../components/EventCalendar/singleEvent/Banner";
import EventDetails from "../../components/EventCalendar/singleEvent/EventDetails";
import FooterIntranet from "../../components/Footer/FooterIntranet";

const singleEventDetails: NextPage = () => {
  return (
    <>
      <Navbar />

      <Banner />
      <EventDetails />
      <FooterIntranet />
    </>
  );
};

export default singleEventDetails;
