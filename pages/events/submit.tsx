import type { NextPage } from "next";
import Head from "next/head";

import FooterBasic from "../../_rds-final/components/Footer/FooterBasic/FooterBasic";
import Navbar from "../../_rds-final/components/Navbar/EventNavbar";
import Container from "../../_rds-final/layouts/Container/Container";
import SubmitForm from "../../_rds-final/components/SubmitForm/SubmitForm";
import Column from "../../_rds-final/layouts/Columns/Columns";
const EventCalendar: NextPage = () => {
  return (
    <>
      <Head>
        <title>Event Calendar | Carleton University</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Container.White>
        <Column.One>
          <h3 className="text-2xl font-semibold text-cu-black-800 md:text-4xl">
            Event Submission
          </h3>
          <SubmitForm />
        </Column.One>
      </Container.White>

      <FooterBasic />
    </>
  );
};

export default EventCalendar;
